// @flow
import React, { Component } from 'react';
import { ReactAgenda, ReactAgendaCtrl, guid, Modal } from 'react-agenda';
import './Agenda.css';

require('dotenv').config()

var now = new Date();

require('moment/locale/fr.js');
var colors = {
  'color-1': "rgba(102, 195, 131 , 1)",
  "color-2": "rgba(242, 177, 52, 1)",
  "color-3": "rgba(235, 85, 59, 1)",
  "color-4": "rgba(70, 159, 213, 1)",
  "color-5": "rgba(170, 59, 123, 1)"
}

export default class Agenda extends Component {
  constructor(props) {
    super(props);



    this.state = {
      items: [],
      selected: [],
      cellHeight: (60 / 4),
      showModal: false,
      locale: "fr",
      rowsPerHour: 4,
      numberOfDays: 7,
      startDate: new Date()
    }
    this.handleRangeSelection = this.handleRangeSelection.bind(this)
    this.handleItemEdit = this.handleItemEdit.bind(this)
    this.zoomIn = this.zoomIn.bind(this)
    this.zoomOut = this.zoomOut.bind(this)
    this._openModal = this._openModal.bind(this)
    this._closeModal = this._closeModal.bind(this)
    this.addNewEvent = this.addNewEvent.bind(this)
    this.removeEvent = this.removeEvent.bind(this)
    this.editEvent = this.editEvent.bind(this)
    this.changeView = this.changeView.bind(this)
    this.handleCellSelection = this.handleCellSelection.bind(this)

  }

  /**
   * Load data when page loads
   */
  componentDidMount() {
    /**
     * fetch the slots from backend
     */
    fetch(process.env.REACT_APP_API_URL_SLOTS)
      .then((Response) => Response.json())
      .then((findSlots) => {
        this.setState({
          items: this.formatItemFromJsonResponse(findSlots)
        })
      }
      );

  }

  /**
   * Format the slots from the ws 
   * @param {*} findSlots 
   */
  formatItemFromJsonResponse(findSlots) {
    let formattedItems = [];

    findSlots['hydra:member'].forEach(function (element) {

      let item = {
        _id: guid(),
        name: element.description,
        startDateTime: new Date(element.startHour),
        endDateTime: new Date(element.endHour),
        classes: 'color-1 color-4',
      };

      formattedItems.push(item);

    }, this);

    return formattedItems;
  }


  componentWillReceiveProps(next, last) {
    if (next.items) {

      this.setState({ items: next.items })
    }
  }
  handleItemEdit(item, openModal) {

    if (item && openModal === true) {
      this.setState({ selected: [item] })
      return this.setState({ showModal: true });
    }



  }
  handleCellSelection(item, openModal) {

    if (this.state.selected && this.state.selected[0] === item) {
      return this._openModal();
    }
    this.setState({ selected: [item] })

  }

  zoomIn() {
    var num = this.state.cellHeight + 15
    this.setState({ cellHeight: num })
  }
  zoomOut() {
    var num = this.state.cellHeight - 15
    this.setState({ cellHeight: num })
  }


  handleDateRangeChange(startDate, endDate) {
    this.setState({ startDate: startDate })

  }

  handleRangeSelection(selected) {


    this.setState({ selected: selected, showCtrl: true })
    this._openModal();

  }

  _openModal() {
    this.setState({ showModal: true })
  }
  _closeModal(e) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.setState({ showModal: false })
  }

  handleItemChange(items, item) {

    this.setState({ items: items })
  }

  handleItemSize(items, item) {

    this.setState({ items: items })

  }

  removeEvent(items, item) {

    this.setState({ items: items });
  }

  addNewEvent(items, newItems) {

    this.setState({ showModal: false, selected: [], items: items });
    this._closeModal();
  }
  editEvent(items, item) {

    this.setState({ showModal: false, selected: [], items: items });
    this._closeModal();
  }

  changeView(days, event) {
    this.setState({ numberOfDays: days })
  }


  render() {
    return (

      <div className="content-expanded white-bg">

        <ReactAgenda
          minDate={new Date(now.getFullYear(), now.getMonth() - 3)}
          maxDate={new Date(now.getFullYear(), now.getMonth() + 3)}
          startDate={this.state.startDate}
          startAtTime={9}
          cellHeight={this.state.cellHeight}
          locale="fr"
          items={this.state.items}
          numberOfDays={this.state.numberOfDays}
          headFormat={"ddd DD MMM"}
          rowsPerHour={this.state.rowsPerHour}
          itemColors={colors}
          //itemComponent={AgendaItem}
          view="calendar"
          autoScale={true}
          fixedHeader={false}
          onRangeSelection={this.handleRangeSelection.bind(this)}
          onChangeEvent={this.handleItemChange.bind(this)}
          onChangeDuration={this.handleItemSize.bind(this)}
          onItemEdit={this.handleItemEdit.bind(this)}
          onCellSelect={this.handleCellSelection.bind(this)}
          onItemRemove={this.removeEvent.bind(this)}
          onDateRangeChange={this.handleDateRangeChange.bind(this)} />
        {
          this.state.showModal ? <Modal clickOutside={this._closeModal} >
            <div className="modal-content">
              <ReactAgendaCtrl items={this.state.items} itemColors={colors} selectedCells={this.state.selected} Addnew={this.addNewEvent} edit={this.editEvent} />

            </div>
          </Modal> : ''
        }


      </div>

    );
  }
}

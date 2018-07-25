import React from 'react';
import { ReactAgenda , ReactAgendaCtrl , guid ,  Modal } from 'react-agenda';
import './Agenda.css';
import moment from 'moment';

require('moment/locale/fr.js'); // this is important for traduction purpose

var colors= {
  'color-1':"rgba(102, 195, 131 , 1)" ,
  "color-2":"rgba(242, 177, 52, 1)" ,
  "color-3":"rgba(235, 85, 59, 1)"
}

var now = new Date();

var items = [
  {
   _id            :guid(),
    name          : 'Guy',
    startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0),
    endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0),
    classes       : 'color-1'
  },
  {
   _id            :guid(),
    name          : 'Alain',
    startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 11, 0),
    endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 13, 0),
    classes       : 'color-2 color-3'
  },

];

class Agenda extends React.Component {
  constructor(props){
  super(props);
    this.state = {
      items:items,
      selected:[],
      cellHeight:10,
      showModal:false,
      locale:"fr",
      rowsPerHour:1,
      numberOfDays:7,
      startDate: new Date()
    }
    this.handleCellSelection = this.handleCellSelection.bind(this)
    this.handleItemEdit = this.handleItemEdit.bind(this)
    this.handleRangeSelection = this.handleRangeSelection.bind(this)
  }

  componentDidMount(){

    this.setState({items:items})


  }


componentWillReceiveProps(next , last){
  if(next.items){

    this.setState({items:next.items})
  }
}
  handleItemEdit(item, openModal) {

    if(item && openModal === true){
      this.setState({selected:[item] })
      return this.setState({showModal:true});
    }



  }
  handleCellSelection(item, openModal) {

    if(this.state.selected && this.state.selected[0] === item){
      return  this._openModal();
    }
       this.setState({selected:[item] })

  }

  zoomIn(){
var num = this.state.cellHeight + 15
    this.setState({cellHeight:num})
  }
  zoomOut(){
var num = this.state.cellHeight - 15
    this.setState({cellHeight:num})
  }


  handleDateRangeChange (startDate, endDate) {
      this.setState({startDate:startDate })

  }

  handleRangeSelection (selected) {


this.setState({selected:selected , showCtrl:true})
this._openModal();

}

_openModal(){
  this.setState({showModal:true})
}
_closeModal(e){
  if(e){
    e.stopPropagation();
    e.preventDefault();
  }
    this.setState({showModal:false})
}

handleItemChange(items , item){

this.setState({items:items})
}

handleItemSize(items , item){

  this.setState({items:items})

}

removeEvent(items , item){

    this.setState({ items:items});
}

addNewEvent (items , newItems){

  this.setState({showModal:false ,selected:[] , items:items});
  this._closeModal();
}
editEvent (items , item){

  this.setState({showModal:false ,selected:[] , items:items});
  this._closeModal();
}

changeView (days , event ){
this.setState({numberOfDays:days})
}
  render() {
    return (
      <div>
        <ReactAgenda
          minDate={now}
          maxDate={new Date(now.getFullYear(), now.getMonth()+3)}
          disablePrevButton={false}
          startDate={this.state.startDate}
          cellHeight={this.state.cellHeight}
          locale={this.state.locale}
          items={this.state.items}
          numberOfDays={this.state.numberOfDays}
          rowsPerHour={this.state.rowsPerHour}
          itemColors={colors}
          autoScale={false}
          fixedHeader={true}
          onItemEdit={this.handleItemEdit.bind(this)}
          onCellSelect={this.handleCellSelection.bind(this)}
          onRangeSelection={this.handleRangeSelection.bind(this)}
          Addnew={this.addNewEvent}
          edit={this.editEvent}
          />
      </div>
    );
  }
}


export default Agenda;
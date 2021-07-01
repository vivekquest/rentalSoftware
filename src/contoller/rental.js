import React, { Component } from 'react';
import { Button,Modal } from 'react-bootstrap';
const FilterableTable = require('react-filterable-table');
let  bookingData =[];
const data =[
  {
    "code":"p1",
    "name":"Air Compressor 12 GAS",
    "type":"plain",
    "availability":"true",
    "needing_repair":"false",
    "durability":3000,
    "max_durability":3000,
    "mileage":"null",
    "price": 4500,
    "minimum_rent_period":1
  },
  {
    "code":"p2",
    "name":"Air Compressor 5 Electric",
    "type":"plain",
    "availability":"true",
    "needing_repair":"false",
    "durability":1500,
    "max_durability":2000,
    "mileage":"null",
    "price": 6500,
    "minimum_rent_period":1
  },
  {
    "code":"p3",
    "name":"Dia Blade 14 inch",
    "type":"plain",
    "availability":"true",
    "needing_repair":"false",
    "durability":40000,
    "max_durability":50000,
    "mileage":"null",
    "price": 3000,
    "minimum_rent_period":2
  },
  {
    "code":"p4",
    "name":"Copper Blade 5 inch",
    "type":"plain",
    "availability":"false",
    "needing_repair":"true",
    "durability":0,
    "max_durability":2000,
    "mileage":"null",
    "price": 200,
    "minimum_rent_period":2
  },
  {
    "code":"p5",
    "name":"Copper Blade 5 inch",
    "type":"plain",
    "availability":"false",
    "needing_repair":"true",
    "durability":0,
    "max_durability":2000,
    "mileage":"null",
    "price": 200,
    "minimum_rent_period":2
  },
  {
    "code":"p6",
    "name":"Copper Blade 8 inch",
    "type":"plain",
    "availability":"true",
    "needing_repair":"false",
    "durability":1500,
    "max_durability":2000,
    "mileage":"null",
    "price": 300,
    "minimum_rent_period":2
  },
  {
    "code":"p7",
    "name":"Beam Clamp",
    "type":"plain",
    "availability":"true",
    "needing_repair":"false",
    "durability":15000,
    "max_durability":20000,
    "mileage":"null",
    "price": 800,
    "minimum_rent_period":30
  },
  {
    "code":"p8",
    "name":"Beam Clamp",
    "type":"plain",
    "availability":"true",
    "needing_repair":"false",
    "durability":10000,
    "max_durability":20000,
    "mileage":"null",
    "price": 800,
    "minimum_rent_period":30
  },
  {
    "code":"p9",
    "name":"Beam Clamp",
    "type":"plain",
    "availability":"false",
    "needing_repair":"false",
    "durability":5000,
    "max_durability":20000,
    "mileage":"null",
    "price": 800,
    "minimum_rent_period":30
  },
  {
    "code":"m1",
    "name":"Boom lift 40",
    "type":"meter",
    "availability":"true",
    "needing_repair":"false",
    "durability":4000,
    "max_durability":8000,
    "mileage":10000,
    "price": 1000,
    "minimum_rent_period":4
  },
  {
    "code":"m2",
    "name":"Boom lift 60",
    "type":"meter",
    "availability":"true",
    "needing_repair":"false",
    "durability":8000,
    "max_durability":10000,
    "mileage":5000,
    "price": 1500,
    "minimum_rent_period":4
  },
  {
    "code":"m3",
    "name":"Boom lift 80",
    "type":"meter",
    "availability":"false",
    "needing_repair":"true",
    "durability":500,
    "max_durability":12000,
    "mileage":200,
    "price": 2000,
    "minimum_rent_period":2
  },
  {
    "code":"m4",
    "name":"Boom lift 100",
    "type":"meter",
    "availability":"true",
    "needing_repair":"false",
    "durability":4000,
    "max_durability":12000,
    "mileage":8500,
    "price": 2500,
    "minimum_rent_period":2
  },
  {
    "code":"m5",
    "name":"Boom lift 20",
    "type":"meter",
    "availability":"true",
    "needing_repair":"false",
    "durability":1200,
    "max_durability":8000,
    "mileage":600,
    "price": 500,
    "minimum_rent_period":1
  },
  {
    "code":"m6",
    "name":"Boom lift 20",
    "type":"meter",
    "availability":"true",
    "needing_repair":"false",
    "durability":8000,
    "max_durability":8000,
    "mileage":0,
    "price": 500,
    "minimum_rent_period":1
  },
  {
    "code":"m7",
    "name":"Boom lift 20",
    "type":"meter",
    "availability":"true",
    "needing_repair":"false",
    "durability":5000,
    "max_durability":8000,
    "mileage":1200,
    "price": 500,
    "minimum_rent_period":1
  },
  {
    "code":"m8",
    "name":"Boom lift 40",
    "type":"meter",
    "availability":"true",
    "needing_repair":"false",
    "durability":8000,
    "max_durability":10000,
    "mileage":2500,
    "price": 1000,
    "minimum_rent_period":2
  }
]


// Fields to show in the table, and what object properties in the data they bind to
const fields = [
	{ name: 'name', displayName: "Name", inputFilterable: true, sortable: true },
	{ name: 'code', displayName: "Co", inputFilterable: true, exactFilterable: true, sortable: true },
	{ name: 'availability', displayName: "Availability" },
	{ name: 'needing_repair', displayName: "Need to Repair", inputFilterable: true, exactFilterable: true, sortable: true },
	{ name: 'durability', displayName: "Durability", inputFilterable: true, exactFilterable: true, sortable: true },
	{ name: 'mileage', displayName: "Mileage", inputFilterable: true, exactFilterable: true, sortable: true }
];

const bookingFields = [
	{ name: 'name', displayName: "Name" },
	{ name: 'code', displayName: "Co"},
  { name:'type', displayName: "Type"},
	{ name: 'durability', displayName: "Durability" },
	{ name: 'mileage', displayName: "Mileage" },
  { name: 'extraMiles', displayName: "Miles Per Day" },
  { name: 'bookingDays', displayName: "Booking days"},
  { name: 'rentalPrice', displayName: "Total Rental Price"},
  { name:'durabilityNew', displayName: "Updated Durability"}
];

class rentalComponent extends Component {
    constructor(props){
        super(props);
        this.state ={ 
          ChatStickerData:'',
          showHide : false,
          successBookshowHide:false,
          returnProductshowHide:false,
          successReturnProductshowHide:false,
          bookingSuccess:false,
          fields: [], 
          errors: {},
          rentalValue:'',
          bookingData: ''
         } 
         this.handleChange = this.handleChange.bind(this);
         this.handleModalsuccessBookshowHide = this.handleModalsuccessBookshowHide.bind(this);
         this.validationCheck = this.validationCheck.bind(this);
    }


    dayCalculation(dateFrom,dateTo){
        const oneDay = 24 * 60 * 60 * 1000;
        const firstDate = new Date(dateFrom);
        const secondDate = new Date(dateTo);
        const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay))+1;
        
        return diffDays;
    }


  validationCheck(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
console.log('er filed:',fields)
    if(!fields["name"]){
        formIsValid = false;
        errors["name"] = "error_sell form-control";
      }

     if(!fields["dateTo"]){
       formIsValid = false;
       errors["dateTo"] = "error_sell form-control";
     }
     if(!fields["dateFrom"]){
          formIsValid = false;
          errors["dateFrom"] = "error_sell form-control";
     }
     const countDays = this.dayCalculation(fields["dateFrom"],fields["dateTo"]);

     if(countDays){
      let codeData = data.find(el => el.code === this.state.fields.name);
      if(countDays < codeData.minimum_rent_period){
        formIsValid = false;
        errors["countDays"] = "Rent the product longer than the minimum rental period.";
      }
    }

     this.setState({errors:errors});
     return formIsValid;
  }


  validationCheckReturnForm(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
   if(!fields["name"]){
      formIsValid = false;
      errors["name"] = "error_sell form-control";
    }
   if(!fields["UsedMileage"]){
     formIsValid = false;
     errors["UsedMileage"] = "error_sell form-control";
   }
   this.setState({errors:errors});
   return formIsValid;
  }


    handleChange(field, e) { 
      let fields = this.state.fields;
      fields[field] = e.target.value;    
      this.setState({ fields });
      console.log('Fields..xx...xx:', fields);    
    }

    handleModalsuccessBookshowHide(event) {
      if(this.validationCheck()){ 
      event.preventDefault();
      let rentalValue =0;
      let extraMiles = 0;
     
      let discountPercentage = 10;
      let durabilityNew=0;
      console.log('Yourname: ' + this.state.fields.name);
      console.log('Your from: ' + this.state.fields.dateFrom);
      console.log('Your to: ' + this.state.fields.dateTo);
      const days = this.dayCalculation(this.state.fields.dateFrom,this.state.fields.dateTo);
      console.log('Day:',days);
      let codeData = data.find(el => el.code === this.state.fields.name);
      console.log(codeData);
      if(codeData.price){
            rentalValue = codeData.price*days;
          if(codeData.minimum_rent_period < days){
            console.log('discount')
            let totalDiscount = (rentalValue*discountPercentage)/100;
            rentalValue = rentalValue-totalDiscount;
          }else{
            console.log('No discount')
          }
      }else{
        rentalValue =0;
      }

      if(codeData.mileage != 'null'){
           extraMiles = days*10;
      }

      if(codeData.type == 'plain'){
        if(codeData.durability > 0){
            durabilityNew = parseInt(codeData.durability)-parseInt(days);
        }
      }else{
        if(codeData.durability > 0){
        let durabilityPoint = days*2;
        let milesPoint = days*2;
        durabilityNew = parseInt(codeData.durability)-parseInt(durabilityPoint);
        extraMiles = extraMiles-milesPoint;
        }
      }
      
      console.log('rentalValue =',rentalValue);
      console.log('codeData.durability =',codeData.durability);
      console.log('durabilityNew =',durabilityNew);
      codeData.extraMiles = extraMiles;
      codeData.bookingDays = days;
      codeData.rentalPrice = rentalValue
      codeData.durabilityNew = durabilityNew
      bookingData.push(codeData);
console.log('bookingData:',bookingData)
      this.setState({ 
        bookingData:bookingData,
        rentalValue:rentalValue,
        successBookshowHide: !this.state.successBookshowHide ,
        showHide: !this.state.showHide
      })
    }
    }

    handleModalsuccessHide(){
        this.setState({ 
          successBookshowHide: false,
          showHide:true,
        })
    } 

  handleModalsuccessBookHide(){
      this.setState({ 
        successBookshowHide: false,
        bookingSuccess:true,
      })
  }
  handleModalShowHide() {
      this.setState({ 
        showHide: !this.state.showHide
       })
   }

  handleModalReturnProductshowHide() {
    this.setState({ 
      returnProductshowHide: !this.state.returnProductshowHide
    })
  }

  
  handleModalSuccessReturnProductshowHide() {

    if(this.validationCheckReturnForm()){ 

      console.log('Yourname: ' + this.state.fields.name);
      console.log('Your UsedMileage: ' + this.state.fields.UsedMileage);

      if(this.state.bookingData){
        let bookingProduct = this.state.bookingData.find(el => el.code === this.state.fields.name);
        this.setState({ 
          rentalValue: bookingProduct.rentalPrice
        })
        
        // if(bookingProduct.extraMiles > 0){
        //   TotalUsedMiles = bookingProduct.extraMiles-this.state.fields.UsedMileage;
        // }
      }

        this.setState({ 
          successReturnProductshowHide: !this.state.successReturnProductshowHide ,
          returnProductshowHide: !this.state.returnProductshowHide
        })
   }
  }

  render() {

console.log('rentalValue =',this.state.bookingData);
    return (
         <div className="Stock-section">
            <div className="container">
            <div className="headTitle"><h2 style={{'textAlign':'center'}}>Rental Data</h2></div>
            </div>
              <div className="container">
              <div className="col-sm-12">
                <div className="rows">
                  <FilterableTable
                    namespace="People"
                    initialSort="name"
                    data={data}
                    fields={fields}
                    noRecordsMessage="There are no data to display"
                    noFilteredRecordsMessage="No data match your filters!"
                  />
                  
                  </div>
                  
                  <div className="buttonSection d-inline p-2">
                      <div class="btn-group" role="group">
                      <Button variant="primary" onClick={() => this.handleModalShowHide()}> Book</Button>&nbsp;&nbsp;
                      <Button variant="primary" onClick={() => this.handleModalReturnProductshowHide()}> Return</Button>
                    </div>
                 </div>


                 {this.state.bookingSuccess ? (<div> 
                <div className="headTitle"><h2 style={{'textAlign':'center'}}>Booking Product</h2></div>
                <FilterableTable
                    namespace="People"
                    initialSort="name"
                    data={this.state.bookingData}
                    fields={bookingFields}
                    noRecordsMessage="There are no data to display"
                    noFilteredRecordsMessage="No data match your filters!"
                  /></div>):null}


                  </div>
              </div>

             
{/* Book Modal */}
                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title>Book a product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <form>
                            <div className="form-group">
                              <select name="name" value={this.state.name} onChange={this.handleChange.bind(this, "name")} className={this.state.errors["name"] ? this.state.errors["name"] : 'form-control'} id="exampleFormControlSelect1">
                                <option value="">Name</option>
                                {data.map((rentalData) => (
                                   <option value={rentalData.code}>{rentalData.name}</option>
                                ))}
                              </select>
                            </div>
                           

                            <div class="form-group">
                              <div className="row">
                              <div class="col-sm-6 date">
                              <label for="exampleInputPassword1">From</label>
                                  <div class="input-group input-append date" id="datePicker">
                                      <input value={this.state.dateFrom} onChange={this.handleChange.bind(this, "dateFrom")} type="date" className={this.state.errors["dateFrom"] ? this.state.errors["dateFrom"] : 'form-control'} name="dateFrom" />
                                      <span class="input-group-addon add-on"><span class="glyphicon glyphicon-calendar"></span></span>
                                  </div>
                              </div>

                              <div class="col-sm-6 date1">
                              <label for="exampleInputPassword1">To</label>
                                  <div class="input-group input-append date1" id="datePicker1">
                                      <input value={this.state.dateTo} onChange={this.handleChange.bind(this, "dateTo")} type="date" className={this.state.errors["dateTo"] ? this.state.errors["dateTo"] : 'form-control'}  name="dateTo" />
                                      <span class="input-group-addon add-on"><span class="glyphicon glyphicon-calendar"></span></span>
                                  </div>
                              </div>
                              
                              <p style={{'color':'red','margin-top': '10px','margin-left': '16px'}}>{this.state.errors["countDays"] ? this.state.errors["countDays"] : null}</p>
                              </div>
                          </div>
                    </form>

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                        No
                    </Button>
                    <Button variant="primary" onClick={this.handleModalsuccessBookshowHide}>
                       Yes
                    </Button>
                    </Modal.Footer>
                </Modal> 


{/* Book Success Modal */}

<Modal show={this.state.successBookshowHide}>
    <Modal.Header closeButton onClick={() => this.handleModalsuccessHide()}>
    <Modal.Title>Book a product</Modal.Title>
    </Modal.Header>
    <Modal.Body>
         <p>Your Estimated Price Is: <strong>{this.state.rentalValue ? this.state.rentalValue : null}</strong></p>
         <p>Do you want to procedure?</p>
    </Modal.Body>
    <Modal.Footer>
    <Button variant="secondary" onClick={() => this.handleModalsuccessHide()}>
        No
    </Button>
    <Button variant="primary" onClick={() => this.handleModalsuccessBookHide()}>
        Yes
    </Button>
    </Modal.Footer>
</Modal> 


{/* Return a Product */}
                <Modal show={this.state.returnProductshowHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalReturnProductshowHide()}>
                    <Modal.Title>Return a product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <form>
                            <div className="form-group">
                              {this.state.bookingData ? (<select value={this.state.name} onChange={this.handleChange.bind(this, "name")} className={this.state.errors["name"] ? this.state.errors["name"] : 'form-control'} id="exampleFormControlSelect1">
                                <option value="">Name</option>
                                
                                {this.state.bookingData.map((rentalData) => (
                                   <option value={rentalData.code}>{rentalData.name}</option>
                                ))}
                              </select>):null}
                            </div>
                           
                            <div className="form-group">
                             <input placeholder="Used Mileage" type="text" name="UsedMileage" value={this.state.UsedMileage} onChange={this.handleChange.bind(this, "UsedMileage")} className={this.state.errors["UsedMileage"] ? this.state.errors["UsedMileage"] : 'form-control'}/>
                            </div>

                    </form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleModalReturnProductshowHide()}>
                        No
                    </Button>
                    <Button variant="primary" onClick={() => this.handleModalSuccessReturnProductshowHide()}>
                       Yes
                    </Button>
                    </Modal.Footer>
                </Modal> 


{/* Return Success Modal */}
<Modal show={this.state.successReturnProductshowHide}>
    <Modal.Header closeButton onClick={() => this.handleModalSuccessReturnProductshowHide()}>
    <Modal.Title>Return a product</Modal.Title>
    </Modal.Header>
    <Modal.Body>
         <p>Your Estimated Price Is: {this.state.rentalValue ? this.state.rentalValue : null}</p>
         <p>Do you want to procedure?</p>
    </Modal.Body>
    <Modal.Footer>
    <Button variant="secondary" onClick={() => this.handleModalSuccessReturnProductshowHide()}>
        No
    </Button>
    <Button variant="primary">
        Yes
    </Button>
    </Modal.Footer>
</Modal> 


          </div>
    );
  }
}

export default rentalComponent;
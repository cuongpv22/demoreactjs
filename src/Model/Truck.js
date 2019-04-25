
class TruckModel {
    constructor(data) {
        if (!data) {
            this.truck_plate = '';
            this.cargo_type = '';
            this.driver = '';
            this.truck_type = '';
            this.price = '';
            this.dimession = '';
            this.parking_address = '';
            this.production_year = '';
            this.status = '';
            this.description = '';

            
        } else {
            this.setData(data);
        }
    }
    setData(data) {
        this.truck_plate = data.truck_plate || '';
        this.cargo_type = data.cargo_type || '';
        this.driver = data.driver || '';
        this.truck_type = data.truck_type || '';
        this.price = data.price || '';
        this.dimession = data.dimession || '';
        this.parking_address = data.parking_address || '';
        this.production_year = data.production_year || '';
        this.status = data.status || '';
        this.description = data.description || '';
       
        return this;
    }
    toJSON() {
        return {
            truck_plate: this.truck_plate ,
            cargo_type:this.cargo_type ,
            driver:this.driver,
            truck_type:this.truck_type,
            price:this.price,
            dimession:this.dimession,
            parking_address:this.parking_address,
            production_year:this.production_year,
            status:this.status,
            description:this.description          
        }
    }
    validate() {
        const errors = {};
        if (!this.truck_plate) {
            errors.truck_plate = 'VALIDATE_REQUIRED';
        }
        if (!this.status) {
            errors.status = 'VALIDATE_REQUIRED';
        }
        if (!this.price) {
            errors.price = 'VALIDATE_REQUIRED';
        }
        if (!this.cargo_type) {
            errors.cargo_type = 'VALIDATE_REQUIRED';
        }
        if (!this.cargo_type) {
            errors.cargo_type = 'VALIDATE_REQUIRED';
        }                           
        return errors;
    }
}

export default TruckModel;

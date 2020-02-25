import { LightningElement,track ,api} from 'lwc';
import get_all_product from '@salesforce/apex/EditProduct.get_all_product';
export default class Edit_product extends LightningElement {
    @api recordId;
    @track edit_product = false;
    handleButtonSelect(){
        this.edit_product = true;
        get_all_product({opp_id:this.recordId})
        .then(result => {
            console.log(result);
            this.product = result;
            do_for();
        })
        .catch(error => {
            this.error = error;
        });
    }
}
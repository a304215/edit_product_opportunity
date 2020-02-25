import { LightningElement,track ,api} from 'lwc';
import get_all_product from '@salesforce/apex/EditProduct.get_all_product';
export default class Edit_product extends LightningElement {
    @api recordId;
    @track edit_product = false;
    @track edit_product_display_list = [];
    handleButtonSelect(){
        get_all_product({opp_id:this.recordId})
        .then(result => {
            for(let i = 0 ; i < result.length;i++){
                this.edit_product_display_list[i] = {
                    name:result[i].Name,
                    quantity:result[i].Quantity,
                    unitprice:result[i].UnitPrice.toFixed(2).toString(),
                    discount:result[i].Discount.toString(),
                    nameUrl:'/lightning/r/PricebookEntry/'+result[i].Id,
                    sale_price:result[i].UnitPrice.toFixed(2).toString(),
                    total:result[i].UnitPrice.toFixed(2).toString()
                }
            }
            console.log(this.edit_product_display_list);
            this.edit_product = true
        })
        .catch(error => {
            this.error = error;
        });
    }
}
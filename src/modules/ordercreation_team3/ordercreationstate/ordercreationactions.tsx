const mapDispatchToProps = (dispatch:Function) => {
    return {
        storeProductdetails: (orderDetails:any) => dispatch({type: 'store_productdetails', orderDetails}),
        createOrder: (deliveryDetails:any)=> dispatch({type: 'create_order',deliveryDetails})
    }
}
export default mapDispatchToProps;
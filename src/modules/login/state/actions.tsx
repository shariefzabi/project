

const mapDispatchToProps = (dispatch:Function) => {
    return {
        createRecord: (userDetails:any) => dispatch({type: 'create_record', userDetails})
    }
}
export default mapDispatchToProps;

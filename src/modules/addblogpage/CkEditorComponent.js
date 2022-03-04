import React from 'react'
// import CKEditor from "react-ckeditor-component";
import './editorstyle.css'
 
class CkEditorExampleComponent extends React.Component{
 
    constructor() {
        super();
         
        this.state = {
            content: '',
            contentError:'',
            contentFlag:false
        }
 
        this.updateContent = this.updateContent.bind(this);
        this.onChange = this.onChange.bind(this);
    }
  
    updateContent(newContent) {
        let {content}=this.state;
        this.setState({
            content: newContent
        })
        // this.props.getdata(content)
    }
     
    onChange(evt){
    let{ content,
    contentError,
    contentFlag,}=this.state
    var newContent = evt.editor.getData();
    this.setState({
      content: newContent
    })
    if (content == undefined || content.length === 0) {
        this.setState({contentError:"Please enter the discription.",contentFlag:true})
        // e.target.classList.add("field-error")
    } else {
        let nameReg = /^([a-zA-Z0-9 ]{100,100})$/
        // console.log(nameReg.test(username));
        if (!nameReg.test(content)) {
            this.setState({ contentError:" Min 10 to Max 100 Char" ,contentFlag:true})
            // e.target.classList.add("field-error")
        } else {
            // e.target.classList.remove("field-error")
            this.setState({contentError:"",contentFlag:false})
        }
    }
    }
     
    onBlur(evt){
    //   console.log("onBlur event called with event info: ", evt);

    }
     
    afterPaste(evt){
    //   console.log("afterPaste event called with event info: ", evt);
    }
 
    render(){
        return(
            // <div className='ckeditor'>
                
            {/* <CKEditor 
            //     activeClass="p10"
            //     content={this.state.content} 
                
            //     events={{
            //         "blur": this.onBlur,
            //         "afterPaste": this.afterPaste,
            //         "change": this.onChange
            //     }}
            //     />
            //     {this.state.contentFlag&&
            //     <div>
            //         {this.state.contentError}
            //     </div>
            //     }
            // </div> */}
        )
    }
     
}
 
export default CkEditorExampleComponent;
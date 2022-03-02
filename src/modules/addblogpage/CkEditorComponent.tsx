import React from 'react'
// import CKEditor from "react-ckeditor-component";
import './editorstyle.css'
 
class CkEditorExampleComponent extends React.Component<any,any>{
 
    constructor(props:any) {
        super(props);
         
        this.state = {
            content: '',
        }
 
        this.updateContent = this.updateContent.bind(this);
        this.onChange = this.onChange.bind(this);
    }
  
    updateContent(newContent:any) {
        this.setState({
            content: newContent
        })
    }
     
    onChange(evt:any){
      var newContent = evt.editor.getData();
      this.setState({
        content: newContent
      })
      console.log("onChange fired with event info: ", newContent);
    }
     
    onBlur(evt:any){
      console.log("onBlur event called with event info: ", evt);
    }
     
    afterPaste(evt:any){
      console.log("afterPaste event called with event info: ", evt);
    }
 
    render(){
        return(
            <div className='ckeditor'>
                
                {/* <CKEditor 
                activeClass="p10"
                content={this.state.content} 
                
                events={{
                    "blur": this.onBlur,
                    "afterPaste": this.afterPaste,
                    "change": this.onChange
                }}
                /> */}
            </div>
        )
    }
     
}
 
export default CkEditorExampleComponent;
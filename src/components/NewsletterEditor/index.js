import React, { Component, useState } from 'react';
import { Button } from 'reactstrap';
import { withFirebase } from '../Firebase';


class NewsletterEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsletterIsHidden: true,
            newsletterButtonText: "Open Newsletter Manager"
        }
        this.toggleNewsletterEditor = this.toggleNewsletterEditor.bind(this)
    }
    toggleNewsletterEditor(){
        this.setState({newsletterIsHidden : !this.state.newsletterIsHidden})
        if(this.state.newsletterButtonText == "Open Newsletter Manager"){
            this.setState({newsletterButtonText: "Close Newsletter Manager"})
        }
        else{
            this.setState({newsletterButtonText: "Open Newsletter Manager"})
        }
    }

    render() {
        return (
            <div style={{margin:"auto", width:"100%"}}>
                <input
                    onClick={this.toggleNewsletterEditor}
                    value={this.state.newsletterButtonText}
                    type="button"
                    className="btn btn-outline-primary"
                />
                { !this.state.newsletterIsHidden ? <NewsletterMenu firebase={this.props.firebase} /> : null }
            </div>
        );
    }
}
const NewsletterMenu = ({firebase}) => {
    let date = new Date()
    console.log(date)
    let day = date.getDate()
    let month = date.getMonth()+1
    let year = date.getFullYear()
    if(day < 10){
        day = `0${day}`
    }
    if(month < 10){
        month = `0${month}`
    }
    let today=`${year}-${month}-${day}`

    const [titleOfNewsletterToBeDeleted, setTitleOfNewsletterToBeDeleted] = useState('');
    const [dateOfNewsletterToBeDeleted, setDateOfNewsletterToBeDeleted] = useState('');

    const [titleOfNewsletterToBeAdded, setTitleOfNewsletterToBeAdded] = useState('');
    const [contentOfNewsletterToBeAdded, setContentOfNewsletterToBeAdded] = useState('');
    const [linkedVideoOfNewsletterToBeAdded, setLinkedVideoOfNewsletterToBeAdded] = useState('');
    const [dateOfNewsletterToBeAdded, setDateOfNewsletterToBeAdded] = useState(today);

    const updateState = (stateSetter) => (event) => {
        stateSetter(event.target.value);
    }

    const handleNewsletterDeleteForm = (event) => {
        event.preventDefault();
        //ADD DATABASE STUFF HERE
        //ASK COREY ABOUT HOW TO GO ABOUT THIS
        if(window.confirm("Are you sure that you want to delete this Newsletter?")) {
            firebase.deleteNewsLetters(`${titleOfNewsletterToBeDeleted}`, `${dateOfNewsletterToBeDeleted}`)
        }
    }

    const handleNewsletterAddForm = (event) => {
        event.preventDefault();
        if(titleOfNewsletterToBeAdded == '') {
            window.alert("A title must be provided");
        }
            //ADD DATABASE STUFF HERE
        //ASK COREY ABOUT HOW TO GO ABOUT THIS
        else {
            firebase.insertNewsLetters(`${contentOfNewsletterToBeAdded}`, `${dateOfNewsletterToBeAdded}`, `${linkedVideoOfNewsletterToBeAdded}`, `${titleOfNewsletterToBeAdded}`)
            window.alert("Newsletter created!");
        }
    }

    return(
        <div >
            <br/>
            <div className="card card-1 shadow" >
                <h4 style={{margin:"auto"}}>Add a newsletter</h4>
                <br/>
                <form onSubmit={handleNewsletterAddForm} name="addNewsletter"  style={{margin:"auto"}}>
                    Title: <input type="text" name="title" placeholder="Title" size="50" value={titleOfNewsletterToBeAdded} onChange={updateState(setTitleOfNewsletterToBeAdded)}/>
                    <br/>
                    Content: <br/>
                    <textarea rows="5" cols="50" name="content" wrap="soft" placeholder="Insert newsletter text content here..." value={contentOfNewsletterToBeAdded} onChange={updateState(setContentOfNewsletterToBeAdded)}/>
                    <br/>
                    Linked Video (Enter "NONE" if no video to link): <br/>
                    <br/>
                    <input type="text" name="linkedVideo" size="50" placeholder="URL of linked YouTube video" value={linkedVideoOfNewsletterToBeAdded} onChange={updateState(setLinkedVideoOfNewsletterToBeAdded)}/>
                    <br/>
                    <br/>
                    Date: <input type="date" name="date" value={dateOfNewsletterToBeAdded} onChange={updateState(setDateOfNewsletterToBeAdded)}/>
                    <br/>
                    <br/>
                    <Button color="primary" onClick={(e) => handleNewsletterAddForm(e)}>Insert</Button>
                </form>
                <br/>
            </div>
            <br/>
            <div className="card card-1 shadow">
                <h4 style={{margin:"auto"}} >Delete a newsletter</h4>
                <br/>
                <span style={{margin:"auto"}} >Enter the title and date of the newsletter to be deleted:</span>
                <br/>
                <form onSubmit={handleNewsletterDeleteForm} id="deleteNewsletter"  style={{margin:"auto"}}>
                    Title: <input type="text" name="title" placeholder="Title" size="50" value={titleOfNewsletterToBeDeleted} onChange={updateState(setTitleOfNewsletterToBeDeleted)}/>
                    <br/>
                    <br/>
                    Date:<input type="date" name="date" value={dateOfNewsletterToBeDeleted} onChange={updateState(setDateOfNewsletterToBeDeleted)}/>
                    <br/>
                    <br/>
                    <Button color="danger" onClick={(e) => handleNewsletterDeleteForm(e)}>Delete</Button>
                    <br/>
                    <br/>
                </form>
            </div>
            <br/>
        </div>
    );
}
export default withFirebase(NewsletterEditor);
import React, { Component, useState } from 'react';
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
            <div>
                <input onClick={this.toggleNewsletterEditor} value={this.state.newsletterButtonText} type="button"/>
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
        console.log(`Title of newsletter to be deleted: ${titleOfNewsletterToBeDeleted}`);
        console.log(`Date of newsletter to be deleted: ${dateOfNewsletterToBeDeleted}`);
        //ADD DATABASE STUFF HERE
        //ASK COREY ABOUT HOW TO GO ABOUT THIS
        firebase.deleteNewsLetters(`${titleOfNewsletterToBeDeleted}`,`${dateOfNewsletterToBeDeleted}`)
    }

    const handleNewsletterAddForm = (event) => {
        event.preventDefault();
        console.log(`Title of newsletter to be added: ${titleOfNewsletterToBeAdded}`);
        console.log(`Content of newsletter to be added: ${contentOfNewsletterToBeAdded}`);
        console.log(`Linked Video of newsletter to be added: ${linkedVideoOfNewsletterToBeAdded}`);
        console.log(`Date of newsletter to be added: ${dateOfNewsletterToBeAdded}`);
        //ADD DATABASE STUFF HERE
        //ASK COREY ABOUT HOW TO GO ABOUT THIS
        firebase.insertNewsLetters(`${contentOfNewsletterToBeAdded}`,`${dateOfNewsletterToBeAdded}`,`${linkedVideoOfNewsletterToBeAdded}`,`${titleOfNewsletterToBeAdded}`)
    }

    return(
        <div>
            <br/>
            <h5>Add a newsletter</h5>
            <form onSubmit={handleNewsletterAddForm} name="addNewsletter">
                Title: <input type="text" name="title" placeholder="Title" size="50" value={titleOfNewsletterToBeAdded} onChange={updateState(setTitleOfNewsletterToBeAdded)}/><br/>
                Content: <br/><textarea rows="5" cols="50" name="content" wrap="soft" placeholder="Insert newsletter text content here..." value={contentOfNewsletterToBeAdded} onChange={updateState(setContentOfNewsletterToBeAdded)}/><br/>
                Linked Video (Enter "NONE" if no video to link): <br/><input type="text" name="linkedVideo" size="50" placeholder="URL of linked YouTube video" value={linkedVideoOfNewsletterToBeAdded} onChange={updateState(setLinkedVideoOfNewsletterToBeAdded)}/><br/>
                Date: <input type="date" name="date" value={dateOfNewsletterToBeAdded} onChange={updateState(setDateOfNewsletterToBeAdded)}/>
                <br/><input type="submit" value="Submit"/>
            </form>
            <br/>
            <h5>Delete a newsletter</h5>
            Enter the title and date of the newsletter to be deleted:
            <form onSubmit={handleNewsletterDeleteForm} id="deleteNewsletter">
                Title: <input type="text" name="title" placeholder="Title" size="50" value={titleOfNewsletterToBeDeleted} onChange={updateState(setTitleOfNewsletterToBeDeleted)}/><br/>
                Date:<input type="date" name="date" value={dateOfNewsletterToBeDeleted} onChange={updateState(setDateOfNewsletterToBeDeleted)}/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}
export default withFirebase(NewsletterEditor);
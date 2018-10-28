import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as noteActions from './../action/noteActions';
import _ from 'lodash';


class NoteTable extends Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            password: ''
        }
    }
    componentDidMount(){
        this.props.dispatch(noteActions.getNotes());
    }

    render() {
        return (
            <section className="portfolio" id="portfolio">
                    <div className="table-container">
                        <div className="row">
                            <div className="col-sm-12">
                            <table className="table table-striped table-responsive-sm table-hover ">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col" colSpan="2">Note</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Created at</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">test</td>
                                    <td colSpan="2">test note jahgsajd </td>
                                    <td>file</td>
                                    <td>12/10/2018</td>
                                    <td>
                                        <span className="edit note-controls">Edit</span>/<span className="delete note-controls">Delete</span>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps)(NoteTable);
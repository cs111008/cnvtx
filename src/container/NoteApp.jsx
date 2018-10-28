import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as countryActions from '../action/userActions'
import AppHeader from './AppHeader';
import NoteTable from './../component/NoteTable';


class NoteApp extends Component {
    

    render() {
        return (
            <div className="App">
                <AppHeader />
                <NoteTable />
            </div>
        )
    }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps)(NoteApp);
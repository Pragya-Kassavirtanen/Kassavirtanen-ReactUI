import React from 'react'
import { Link } from 'react-router'

import {
    Table,
    TableBody,
    TableRowColumn,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from  'material-ui'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

/**
 * @author  Kristian Lauttamus
 */

export default class NewInvoiceComponent extends React.Component {
    render() {
        return <Salary {...this.props}/>
    }
}

const Salary = ({}) =>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className="container-fluid">
            <div className="row">
                <div className="dashboard-content-header">
                    <h1>Maksetut palkat</h1>
                </div>
            </div>
            <div className="row">
                <div className="dashboard-content-header">
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="dashboard-content-header">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <Table selectable={false}>
                                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                                        <TableRow>
                                            <TableHeaderColumn>Pvm.</TableHeaderColumn>
                                            <TableHeaderColumn>Bruttopalkka + lomakorv.</TableHeaderColumn>
                                            <TableHeaderColumn>Nettopalkka</TableHeaderColumn>
                                            <TableHeaderColumn>Matkak.</TableHeaderColumn>
                                            <TableHeaderColumn>Kuluk.</TableHeaderColumn>
                                            <TableHeaderColumn>Maksettu yht.</TableHeaderColumn>
                                            <TableHeaderColumn>Palkkakuitti</TableHeaderColumn>
                                            <TableHeaderColumn>Lisätiedot</TableHeaderColumn>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody displayRowCheckbox={false}>
                                        <TableRow>
                                            <TableRowColumn>11.12.2016</TableRowColumn>
                                            <TableRowColumn>20.57</TableRowColumn>
                                            <TableRowColumn>11.57</TableRowColumn>
                                            <TableRowColumn>654.57</TableRowColumn>
                                            <TableRowColumn></TableRowColumn>
                                            <TableRowColumn>12222.57</TableRowColumn>
                                            <TableRowColumn>
                                                <Link to="#">Näytä palkkakuitti</Link>
                                            </TableRowColumn>
                                            <TableRowColumn>
                                                <Link to="#">Näytä lisätiedot</Link>
                                            </TableRowColumn>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="dashboard-content-header">
                    <h1>Yhteenvedot palkoista</h1>
                </div>
            </div>
            <div className="row">
                <div className="dashboard-content-header">
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="dashboard-content-header">
                    <div className="col-md-12">
                        <div className="col-md-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Yhteensä
                                </div>
                                <div className="panel-body">
                                    <Table selectable={false}>
                                        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                                            <TableRow>
                                                <TableHeaderColumn>Brutto</TableHeaderColumn>
                                                <TableHeaderColumn>Netto</TableHeaderColumn>
                                                <TableHeaderColumn>Ennakonpidätys</TableHeaderColumn>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody displayRowCheckbox={false}>
                                            <TableRow>
                                                <TableRowColumn>0€</TableRowColumn>
                                                <TableRowColumn>0€</TableRowColumn>
                                                <TableRowColumn>0€</TableRowColumn>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    2017
                                </div>
                                <div className="panel-body">
                                    <Table selectable={false}>
                                        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                                            <TableRow>
                                                <TableHeaderColumn>Brutto</TableHeaderColumn>
                                                <TableHeaderColumn>Netto</TableHeaderColumn>
                                                <TableHeaderColumn>Ennakonpidätys</TableHeaderColumn>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody displayRowCheckbox={false}>
                                            <TableRow>
                                                <TableRowColumn>0€</TableRowColumn>
                                                <TableRowColumn>0€</TableRowColumn>
                                                <TableRowColumn>0€</TableRowColumn>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MuiThemeProvider>

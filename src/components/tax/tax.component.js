import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { renderTextField, renderInputFile } from '../../utils/wrappers'
import { Field } from 'redux-form'
import { RaisedButton } from 'material-ui'

const Tax = ({ onFileUpload }) =>
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <form>
      <section className="container-fluid">
        <section className="row">
          <section className="dashboard-content-header">
            <h1>Lähetä verokortti</h1>
          </section>
        </section>
        <section className="dashboard-content-header">
          <hr/>
        </section>
        <section className="row">
          <section className="dashboard-content-header">
            <section className="col-xs-12 col-sm-6 col-lg-6">
              <section className="panel panel-default">
                <section className="panel-heading">
                  <h3 className="panel-title">Sähköisesti</h3>
                </section>
                <section className="panel-body">
                  <p>Lähetä meille verokorttisi helposti sähköisessä muodossa alla olevan lomakkeen kautta.</p>
                  <section className="dashboard-tax-content">
                    <p>Sallitut tiedostotyypit: jpg, jpeg, png, pdf</p>
                    <Field name="taxCard"
                           label="Lisää sähköinen verokortti"
                           disabled={true}
                           component={renderTextField}/>
                    <section className="pull-right">
                      <RaisedButton
                        label="Lisää verokortti"
                        primary={true}
                        containerElement={<label htmlFor="input-tax"></label>}/>
                      <section className="dashboard-tax-input">
                        <Field name="inputFile"
                               component={renderInputFile}
                               id="input-tax"
                               onChange={onFileUpload}/>
                        {/*<input id="input-tax" type="file" onChange={(e) => onInputChange(e)}/>*/}
                      </section>
                    </section>
                  </section>
              </section>
              </section>
            </section>
          </section>
          <section className="dashboard-content-header">
            <section className="col-xs-12 col-sm-6 col-lg-6">
              <section className="panel panel-default">
                <section className="panel-heading">
                  <h3 className="panel-title">Posti tai sähköposti</h3>
                </section>
                <section className="panel-body">
                  <p className="dashboard-tax-description">Voit lähettää verokorttisi myös postitse tai sähköpostitse.</p>
                  <section className="dasboard-tax-address">
                    <p>
                      Lähetä verokortti postilla osoitteeseen:<br/>
                      Kassavirtanen Oy / Kassavirtanen.fi<br/>
                      Salomonkatu 16<br/>
                      00180 Helsinki<br/>
                      <br/><br/>
                      Tai sähköpostitse:<br/>
                      verokortit@kassavirtanen.fi
                    </p>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </form>
  </MuiThemeProvider>

Tax.defaultProps = {
  fileTypeRegex: /\.(pdf|jpg|png)/
}

export default Tax

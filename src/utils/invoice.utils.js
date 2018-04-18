import React from 'react'
import { MenuItem } from 'material-ui'

const alvList = [
  { alv: 24, description: '24% Pääsääntöisesti työsuoritteet laskutetaan tällä verokannalla' },
  { alv: 10, description: '10% Kulttuuri- ja viihdetilaisuuksien lipunmyynti (AVL 85a§)' },
  { alv: 10, description: '10% Taide-esineen myynti (AVL 85a§)' },
  { alv: 10, description: '10% Liikunnanohjausta yksityisasiakkaalle (AVL 85a§)' },
  { alv: 0, description: '0% Rakennusalan käänteinen alv (AVL 8c§)' },
  { alv: 0, description: '0% Taiteilijan palkkio (AVL 45§)' },
  { alv: 0, description: '0% Terveyden- ja sairaanhoitopalvelu (AVL 34§ 1. mom)' },
  { alv: 0, description: '0% Koulutetun hierojan palvelu (AVL 34§ 1. mom)' },
  { alv: 0, description: '0% Sosiaalialan työ (AVL 37§)' },
  { alv: 0, description: '0% Opetustyö valtiolle (AVL 39§)' },
  { alv: 0, description: '0% Viittomakielen tulkkaus (AVL 59§ 5. mom)' },
  { alv: 0, description: '0% Vakuutuspalvelujen myynti (AVL 44§)' },
  { alv: 0, description: '0% Toisessa EU-maassa sijaitseva yritys/yhdistys, jolla on voimassa oleva VAT-ID tunnus (AVL 44§)' },
  { alv: 0, description: '0% Euroopan unioni (EU dir. 2006/112/EY, 151 art.)' },
  { alv: 0, description: '0% Euroopan unionin ulkopuolinen laskutus (AVL 44§)' },
  { alv: 0, description: '0% Kansainvälinen laivatyö (AVL 71§)' }
]
const titleList = [ 'KONSULTTI', 'OHJELMISTOSUUNNITTELIJA', 'ART DIRECTOR', 'AGRONOMI' ]
const countryList = [ 'Norja', 'Venäjä', 'Viro', 'Saksa', 'Islanti', 'Suomi', 'Ruotsi', 'Tanska' ]
const invoiceList = [ 'Sähköposti', 'Kirjeposti' ]
const unitList = ['kpl', 'h']
const alvPercentageList = [
  { alv: 0, description: '0 %'},
  { alv: 10, description: '10 %'},
  { alv: 14, description: '14 %'},
  { alv: 24, description: '24 %'}
]

const _createMenuItems = menuItems =>
  menuItems.map((item, index) => <MenuItem key={index} value={item} primaryText={item}/>)

const _createOverdueItems = () => {
  let overdueItems = []
  for (let i = 0; i < 54; i++) {
    overdueItems.push(<MenuItem key={i + 7} value={i + 7} primaryText={`${i + 7} päivää`}/>)
  }
  return overdueItems
}

export const countryItems = _createMenuItems(countryList)
export const invoiceItems = _createMenuItems(invoiceList)
export const alvPercentageItems = alvPercentageList.map((item, index) => <MenuItem key={index}
                                                                                   value={item.alv}
                                                                                   primaryText={item.description}/>)
export const unitItems = _createMenuItems(unitList)
export const overdueItems = _createOverdueItems()
export const titleItems = _createMenuItems(titleList)
export const alvItems = alvList.map((item, index) => <MenuItem key={index}
                                                        value={item.alv}
                                                        primaryText={item.description}/>)

import React, { Component } from 'react'
import {
  Container, Col, Row, Form,
  FormGroup, Label, Input,
  Button, FormFeedback,Spinner,Alert, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
//import countryList from "react-select-country-list";
import OtpTimer  from "otp-timer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from 'react-router';

class SignUp extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       modal: {
          open: false,
          loadForm: false,
          show: false,
          modalmsg: ''
       },
       confirmToken: '',
       FullName: '',
       EmailId: '',
       PhoneNo: '',
       Code:'',
       DOB: '' ,
       Country: '',
       Password: '',
       showPassword: false,
       ConfirmPassword: '',
       //cValues: countryList().getLabels(),
       infoC:[ { "name": "Afghanistan", "dial_code": "+93", "code": "AF" }, { "name": "Aland Islands", "dial_code": "+358", "code": "AX" }, { "name": "Albania", "dial_code": "+355", "code": "AL" }, { "name": "Algeria", "dial_code": "+213", "code": "DZ" }, { "name": "AmericanSamoa", "dial_code": "+1684", "code": "AS" }, { "name": "Andorra", "dial_code": "+376", "code": "AD" }, { "name": "Angola", "dial_code": "+244", "code": "AO" }, { "name": "Anguilla", "dial_code": "+1264", "code": "AI" }, { "name": "Antarctica", "dial_code": "+672", "code": "AQ" }, { "name": "Antigua and Barbuda", "dial_code": "+1268", "code": "AG" }, { "name": "Argentina", "dial_code": "+54", "code": "AR" }, { "name": "Armenia", "dial_code": "+374", "code": "AM" }, { "name": "Aruba", "dial_code": "+297", "code": "AW" }, { "name": "Australia", "dial_code": "+61", "code": "AU" }, { "name": "Austria", "dial_code": "+43", "code": "AT" }, { "name": "Azerbaijan", "dial_code": "+994", "code": "AZ" }, { "name": "Bahamas", "dial_code": "+1242", "code": "BS" }, { "name": "Bahrain", "dial_code": "+973", "code": "BH" }, { "name": "Bangladesh", "dial_code": "+880", "code": "BD" }, { "name": "Barbados", "dial_code": "+1246", "code": "BB" }, { "name": "Belarus", "dial_code": "+375", "code": "BY" }, { "name": "Belgium", "dial_code": "+32", "code": "BE" }, { "name": "Belize", "dial_code": "+501", "code": "BZ" }, { "name": "Benin", "dial_code": "+229", "code": "BJ" }, { "name": "Bermuda", "dial_code": "+1441", "code": "BM" }, { "name": "Bhutan", "dial_code": "+975", "code": "BT" }, { "name": "Bolivia, Plurinational State of bolivia", "dial_code": "+591", "code": "BO" }, { "name": "Bosnia and Herzegovina", "dial_code": "+387", "code": "BA" }, { "name": "Botswana", "dial_code": "+267", "code": "BW" }, { "name": "Brazil", "dial_code": "+55", "code": "BR" }, { "name": "British Indian Ocean Territory", "dial_code": "+246", "code": "IO" }, { "name": "Brunei Darussalam", "dial_code": "+673", "code": "BN" }, { "name": "Bulgaria", "dial_code": "+359", "code": "BG" }, { "name": "Burkina Faso", "dial_code": "+226", "code": "BF" }, { "name": "Burundi", "dial_code": "+257", "code": "BI" }, { "name": "Cambodia", "dial_code": "+855", "code": "KH" }, { "name": "Cameroon", "dial_code": "+237", "code": "CM" }, { "name": "Canada", "dial_code": "+1", "code": "CA" }, { "name": "Cape Verde", "dial_code": "+238", "code": "CV" }, { "name": "Cayman Islands", "dial_code": "+ 345", "code": "KY" }, { "name": "Central African Republic", "dial_code": "+236", "code": "CF" }, { "name": "Chad", "dial_code": "+235", "code": "TD" }, { "name": "Chile", "dial_code": "+56", "code": "CL" }, { "name": "China", "dial_code": "+86", "code": "CN" }, { "name": "Christmas Island", "dial_code": "+61", "code": "CX" }, { "name": "Cocos (Keeling) Islands", "dial_code": "+61", "code": "CC" }, { "name": "Colombia", "dial_code": "+57", "code": "CO" }, { "name": "Comoros", "dial_code": "+269", "code": "KM" }, { "name": "Congo", "dial_code": "+242", "code": "CG" }, { "name": "Congo, The Democratic Republic of the Congo", "dial_code": "+243", "code": "CD" }, { "name": "Cook Islands", "dial_code": "+682", "code": "CK" }, { "name": "Costa Rica", "dial_code": "+506", "code": "CR" }, { "name": "Cote d'Ivoire", "dial_code": "+225", "code": "CI" }, { "name": "Croatia", "dial_code": "+385", "code": "HR" }, { "name": "Cuba", "dial_code": "+53", "code": "CU" }, { "name": "Cyprus", "dial_code": "+357", "code": "CY" }, { "name": "Czech Republic", "dial_code": "+420", "code": "CZ" }, { "name": "Denmark", "dial_code": "+45", "code": "DK" }, { "name": "Djibouti", "dial_code": "+253", "code": "DJ" }, { "name": "Dominica", "dial_code": "+1767", "code": "DM" }, { "name": "Dominican Republic", "dial_code": "+1849", "code": "DO" }, { "name": "Ecuador", "dial_code": "+593", "code": "EC" }, { "name": "Egypt", "dial_code": "+20", "code": "EG" }, { "name": "El Salvador", "dial_code": "+503", "code": "SV" }, { "name": "Equatorial Guinea", "dial_code": "+240", "code": "GQ" }, { "name": "Eritrea", "dial_code": "+291", "code": "ER" }, { "name": "Estonia", "dial_code": "+372", "code": "EE" }, { "name": "Ethiopia", "dial_code": "+251", "code": "ET" }, { "name": "Falkland Islands (Malvinas)", "dial_code": "+500", "code": "FK" }, { "name": "Faroe Islands", "dial_code": "+298", "code": "FO" }, { "name": "Fiji", "dial_code": "+679", "code": "FJ" }, { "name": "Finland", "dial_code": "+358", "code": "FI" }, { "name": "France", "dial_code": "+33", "code": "FR" }, { "name": "French Guiana", "dial_code": "+594", "code": "GF" }, { "name": "French Polynesia", "dial_code": "+689", "code": "PF" }, { "name": "Gabon", "dial_code": "+241", "code": "GA" }, { "name": "Gambia", "dial_code": "+220", "code": "GM" }, { "name": "Georgia", "dial_code": "+995", "code": "GE" }, { "name": "Germany", "dial_code": "+49", "code": "DE" }, { "name": "Ghana", "dial_code": "+233", "code": "GH" }, { "name": "Gibraltar", "dial_code": "+350", "code": "GI" }, { "name": "Greece", "dial_code": "+30", "code": "GR" }, { "name": "Greenland", "dial_code": "+299", "code": "GL" }, { "name": "Grenada", "dial_code": "+1473", "code": "GD" }, { "name": "Guadeloupe", "dial_code": "+590", "code": "GP" }, { "name": "Guam", "dial_code": "+1671", "code": "GU" }, { "name": "Guatemala", "dial_code": "+502", "code": "GT" }, { "name": "Guernsey", "dial_code": "+44", "code": "GG" }, { "name": "Guinea", "dial_code": "+224", "code": "GN" }, { "name": "Guinea-Bissau", "dial_code": "+245", "code": "GW" }, { "name": "Guyana", "dial_code": "+592", "code": "GY" }, { "name": "Haiti", "dial_code": "+509", "code": "HT" }, { "name": "Holy See (Vatican City State)", "dial_code": "+379", "code": "VA" }, { "name": "Honduras", "dial_code": "+504", "code": "HN" }, { "name": "Hong Kong", "dial_code": "+852", "code": "HK" }, { "name": "Hungary", "dial_code": "+36", "code": "HU" }, { "name": "Iceland", "dial_code": "+354", "code": "IS" }, { "name": "India", "dial_code": "+91", "code": "IN" }, { "name": "Indonesia", "dial_code": "+62", "code": "ID" }, { "name": "Iran, Islamic Republic of Persian Gulf", "dial_code": "+98", "code": "IR" }, { "name": "Iraq", "dial_code": "+964", "code": "IQ" }, { "name": "Ireland", "dial_code": "+353", "code": "IE" }, { "name": "Isle of Man", "dial_code": "+44", "code": "IM" }, { "name": "Israel", "dial_code": "+972", "code": "IL" }, { "name": "Italy", "dial_code": "+39", "code": "IT" }, { "name": "Jamaica", "dial_code": "+1876", "code": "JM" }, { "name": "Japan", "dial_code": "+81", "code": "JP" }, { "name": "Jersey", "dial_code": "+44", "code": "JE" }, { "name": "Jordan", "dial_code": "+962", "code": "JO" }, { "name": "Kazakhstan", "dial_code": "+7", "code": "KZ" }, { "name": "Kenya", "dial_code": "+254", "code": "KE" }, { "name": "Kiribati", "dial_code": "+686", "code": "KI" }, { "name": "Korea, Democratic People's Republic of Korea", "dial_code": "+850", "code": "KP" }, { "name": "Korea, Republic of South Korea", "dial_code": "+82", "code": "KR" }, { "name": "Kuwait", "dial_code": "+965", "code": "KW" }, { "name": "Kyrgyzstan", "dial_code": "+996", "code": "KG" }, { "name": "Laos", "dial_code": "+856", "code": "LA" }, { "name": "Latvia", "dial_code": "+371", "code": "LV" }, { "name": "Lebanon", "dial_code": "+961", "code": "LB" }, { "name": "Lesotho", "dial_code": "+266", "code": "LS" }, { "name": "Liberia", "dial_code": "+231", "code": "LR" }, { "name": "Libyan Arab Jamahiriya", "dial_code": "+218", "code": "LY" }, { "name": "Liechtenstein", "dial_code": "+423", "code": "LI" }, { "name": "Lithuania", "dial_code": "+370", "code": "LT" }, { "name": "Luxembourg", "dial_code": "+352", "code": "LU" }, { "name": "Macao", "dial_code": "+853", "code": "MO" }, { "name": "Macedonia", "dial_code": "+389", "code": "MK" }, { "name": "Madagascar", "dial_code": "+261", "code": "MG" }, { "name": "Malawi", "dial_code": "+265", "code": "MW" }, { "name": "Malaysia", "dial_code": "+60", "code": "MY" }, { "name": "Maldives", "dial_code": "+960", "code": "MV" }, { "name": "Mali", "dial_code": "+223", "code": "ML" }, { "name": "Malta", "dial_code": "+356", "code": "MT" }, { "name": "Marshall Islands", "dial_code": "+692", "code": "MH" }, { "name": "Martinique", "dial_code": "+596", "code": "MQ" }, { "name": "Mauritania", "dial_code": "+222", "code": "MR" }, { "name": "Mauritius", "dial_code": "+230", "code": "MU" }, { "name": "Mayotte", "dial_code": "+262", "code": "YT" }, { "name": "Mexico", "dial_code": "+52", "code": "MX" }, { "name": "Micronesia, Federated States of Micronesia", "dial_code": "+691", "code": "FM" }, { "name": "Moldova", "dial_code": "+373", "code": "MD" }, { "name": "Monaco", "dial_code": "+377", "code": "MC" }, { "name": "Mongolia", "dial_code": "+976", "code": "MN" }, { "name": "Montenegro", "dial_code": "+382", "code": "ME" }, { "name": "Montserrat", "dial_code": "+1664", "code": "MS" }, { "name": "Morocco", "dial_code": "+212", "code": "MA" }, { "name": "Mozambique", "dial_code": "+258", "code": "MZ" }, { "name": "Myanmar", "dial_code": "+95", "code": "MM" }, { "name": "Namibia", "dial_code": "+264", "code": "NA" }, { "name": "Nauru", "dial_code": "+674", "code": "NR" }, { "name": "Nepal", "dial_code": "+977", "code": "NP" }, { "name": "Netherlands", "dial_code": "+31", "code": "NL" }, { "name": "Netherlands Antilles", "dial_code": "+599", "code": "AN" }, { "name": "New Caledonia", "dial_code": "+687", "code": "NC" }, { "name": "New Zealand", "dial_code": "+64", "code": "NZ" }, { "name": "Nicaragua", "dial_code": "+505", "code": "NI" }, { "name": "Niger", "dial_code": "+227", "code": "NE" }, { "name": "Nigeria", "dial_code": "+234", "code": "NG" }, { "name": "Niue", "dial_code": "+683", "code": "NU" }, { "name": "Norfolk Island", "dial_code": "+672", "code": "NF" }, { "name": "Northern Mariana Islands", "dial_code": "+1670", "code": "MP" }, { "name": "Norway", "dial_code": "+47", "code": "NO" }, { "name": "Oman", "dial_code": "+968", "code": "OM" }, { "name": "Pakistan", "dial_code": "+92", "code": "PK" }, { "name": "Palau", "dial_code": "+680", "code": "PW" }, { "name": "Palestinian Territory, Occupied", "dial_code": "+970", "code": "PS" }, { "name": "Panama", "dial_code": "+507", "code": "PA" }, { "name": "Papua New Guinea", "dial_code": "+675", "code": "PG" }, { "name": "Paraguay", "dial_code": "+595", "code": "PY" }, { "name": "Peru", "dial_code": "+51", "code": "PE" }, { "name": "Philippines", "dial_code": "+63", "code": "PH" }, { "name": "Pitcairn", "dial_code": "+64", "code": "PN" }, { "name": "Poland", "dial_code": "+48", "code": "PL" }, { "name": "Portugal", "dial_code": "+351", "code": "PT" }, { "name": "Puerto Rico", "dial_code": "+1939", "code": "PR" }, { "name": "Qatar", "dial_code": "+974", "code": "QA" }, { "name": "Romania", "dial_code": "+40", "code": "RO" }, { "name": "Russia", "dial_code": "+7", "code": "RU" }, { "name": "Rwanda", "dial_code": "+250", "code": "RW" }, { "name": "Reunion", "dial_code": "+262", "code": "RE" }, { "name": "Saint Barthelemy", "dial_code": "+590", "code": "BL" }, { "name": "Saint Helena, Ascension and Tristan Da Cunha", "dial_code": "+290", "code": "SH" }, { "name": "Saint Kitts and Nevis", "dial_code": "+1869", "code": "KN" }, { "name": "Saint Lucia", "dial_code": "+1758", "code": "LC" }, { "name": "Saint Martin", "dial_code": "+590", "code": "MF" }, { "name": "Saint Pierre and Miquelon", "dial_code": "+508", "code": "PM" }, { "name": "Saint Vincent and the Grenadines", "dial_code": "+1784", "code": "VC" }, { "name": "Samoa", "dial_code": "+685", "code": "WS" }, { "name": "San Marino", "dial_code": "+378", "code": "SM" }, { "name": "Sao Tome and Principe", "dial_code": "+239", "code": "ST" }, { "name": "Saudi Arabia", "dial_code": "+966", "code": "SA" }, { "name": "Senegal", "dial_code": "+221", "code": "SN" }, { "name": "Serbia", "dial_code": "+381", "code": "RS" }, { "name": "Seychelles", "dial_code": "+248", "code": "SC" }, { "name": "Sierra Leone", "dial_code": "+232", "code": "SL" }, { "name": "Singapore", "dial_code": "+65", "code": "SG" }, { "name": "Slovakia", "dial_code": "+421", "code": "SK" }, { "name": "Slovenia", "dial_code": "+386", "code": "SI" }, { "name": "Solomon Islands", "dial_code": "+677", "code": "SB" }, { "name": "Somalia", "dial_code": "+252", "code": "SO" }, { "name": "South Africa", "dial_code": "+27", "code": "ZA" }, { "name": "South Sudan", "dial_code": "+211", "code": "SS" }, { "name": "South Georgia and the South Sandwich Islands", "dial_code": "+500", "code": "GS" }, { "name": "Spain", "dial_code": "+34", "code": "ES" }, { "name": "Sri Lanka", "dial_code": "+94", "code": "LK" }, { "name": "Sudan", "dial_code": "+249", "code": "SD" }, { "name": "Suriname", "dial_code": "+597", "code": "SR" }, { "name": "Svalbard and Jan Mayen", "dial_code": "+47", "code": "SJ" }, { "name": "Swaziland", "dial_code": "+268", "code": "SZ" }, { "name": "Sweden", "dial_code": "+46", "code": "SE" }, { "name": "Switzerland", "dial_code": "+41", "code": "CH" }, { "name": "Syrian Arab Republic", "dial_code": "+963", "code": "SY" }, { "name": "Taiwan", "dial_code": "+886", "code": "TW" }, { "name": "Tajikistan", "dial_code": "+992", "code": "TJ" }, { "name": "Tanzania, United Republic of Tanzania", "dial_code": "+255", "code": "TZ" }, { "name": "Thailand", "dial_code": "+66", "code": "TH" }, { "name": "Timor-Leste", "dial_code": "+670", "code": "TL" }, { "name": "Togo", "dial_code": "+228", "code": "TG" }, { "name": "Tokelau", "dial_code": "+690", "code": "TK" }, { "name": "Tonga", "dial_code": "+676", "code": "TO" }, { "name": "Trinidad and Tobago", "dial_code": "+1868", "code": "TT" }, { "name": "Tunisia", "dial_code": "+216", "code": "TN" }, { "name": "Turkey", "dial_code": "+90", "code": "TR" }, { "name": "Turkmenistan", "dial_code": "+993", "code": "TM" }, { "name": "Turks and Caicos Islands", "dial_code": "+1649", "code": "TC" }, { "name": "Tuvalu", "dial_code": "+688", "code": "TV" }, { "name": "Uganda", "dial_code": "+256", "code": "UG" }, { "name": "Ukraine", "dial_code": "+380", "code": "UA" }, { "name": "United Arab Emirates", "dial_code": "+971", "code": "AE" }, { "name": "United Kingdom", "dial_code": "+44", "code": "GB" }, { "name": "United States", "dial_code": "+1", "code": "US" }, { "name": "Uruguay", "dial_code": "+598", "code": "UY" }, { "name": "Uzbekistan", "dial_code": "+998", "code": "UZ" }, { "name": "Vanuatu", "dial_code": "+678", "code": "VU" }, { "name": "Venezuela, Bolivarian Republic of Venezuela", "dial_code": "+58", "code": "VE" }, { "name": "Vietnam", "dial_code": "+84", "code": "VN" }, { "name": "Virgin Islands, British", "dial_code": "+1284", "code": "VG" }, { "name": "Virgin Islands, U.S.", "dial_code": "+1340", "code": "VI" }, { "name": "Wallis and Futuna", "dial_code": "+681", "code": "WF" }, { "name": "Yemen", "dial_code": "+967", "code": "YE" }, { "name": "Zambia", "dial_code": "+260", "code": "ZM" }, { "name": "Zimbabwe", "dial_code": "+263", "code": "ZW" } ],
       touched: {
        FullName: false,
        EmailId: false,
        PhoneNo: false,
        Code: false,
        DOB: false ,
        Country: false,
        Password: false,
        ConfirmPassword: false,
        showmsg:false
       }

    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);


  }
  
  handleInputChange =(event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }

  toogle = () => {
    var modal = this.state.modal
    modal.open = !modal.open
    modal.modalmsg = ''
    modal.loadForm = true
    this.setState({
      modal: modal
    })
  }

  encode =(userToken) =>{
    const cipherI = {'a': '5', 'b': 'A', 'c': '*', 'd': 'B', 'e': 'C', 'f': 'f', 'g': '&', 'h': 'D', 'i': 'E', 'j': '^', 'k': 'l', 'l': 'n', 'm': '1', 'n': '6', 'o': 'z', 'p': '%', 'q': 'F', 'r': 'k', 's': 'm', 't': 'o', 'u': 'g', 'v': 'G', 'w': 'j', 'x': 'a', 'y': 'H', 'z': '7', 'A': 'h', 'B': 'I', 'C': 'J', 'D': 'i', 'E': 'b', 'F': '3', 'G': 'K', 'H': 'L', 'I': '2', 'J': '4', 'K': 'M', 'L': 'p', 'M': 'N', 'N': '8', 'O': 'O', 'P': 'P', 'Q': 'e', 'R': 'c', 'S': 'q', 'T': '0', 'U': '$', 'V': 't', 'W': 'Q', 'X': 'y', 'Y': 's', 'Z': 'v', '0': 'R', '9': 'S', '8': 'u', '7': '7', '6': 'r', '5': '9', '4': 'T', '3': 'd', '2': 'U', '1': 'V', '@': '@', '$': 'Q', '%': 'w', '^': 'X', '&': 'Y', '*': 'x'}
    let token = ''
    for (let i in userToken)
    {
      token = token + cipherI[userToken[i]]
    }
    //console.log('t',token)
    return token
  }

 /*  decode = (verifyToken) => {

    const cipher = {'0': 'T',
    '1': 'm',
    '2': 'I',
    '3': 'F',
    '4': 'J',
    '5': 'a',
    '6': 'n',
    '7': 'z',
    '8': 'N',
    '9': '5',
    'R': '0',
    'V': '1',
    'U': '2',
    'd': '3',
    'T': '4',
    'r': '6',
    'u': '8',
    'S': '9',
    'A': 'b',
    '*': 'c',
    'B': 'd',
    'C': 'e',
    'f': 'f',
    '&': 'g',
    'D': 'h',
    'E': 'i',
    '^': 'j',
    'l': 'k',
    'n': 'l',
    'z': 'o',
    '%': 'p',
    'F': 'q',
    'k': 'r',
    'm': 's',
    'o': 't',
    'g': 'u',
    'G': 'v',
    'j': 'w',
    'a': 'x',
    'H': 'y',
    'h': 'A',
    'I': 'B',
    'J': 'C',
    'i': 'D',
    'b': 'E',
    'K': 'G',
    'L': 'H',
    'M': 'K',
    'p': 'L',
    'N': 'M',
    'O': 'O',
    'P': 'P',
    'e': 'Q',
    'c': 'R',
    'q': 'S',
    '$': 'U',
    't': 'V',
    'Q': '$',
    'y': 'X',
    's': 'Y',
    'v': 'Z',
    '@': '@',
    'w': '%',
    'X': '^',
    'Y': '&',
    'x': '*'}
    let token = ''
    for (let i in verifyToken)
    {
      token = token + cipher[verifyToken[i]]
    }
    console.log('t',token)
    return token

  } */

  handletokenSubmit = async (event) => {
    event.preventDefault()
    const verifyStatus = this.props.verifyMailStatus
    var verifyToken = verifyStatus.verifyStatus.token
    var modal = this.state.modal
    if(verifyToken)
    if(this.encode(this.state.confirmToken) === this.props.verifyMailStatus.verifyStatus.token)
    {
      //console.log('yes')
      modal.show = false
      modal.loadForm = false
      this.setState({
        modal:modal
      })
      var diff = Date.now()-new Date(this.state.DOB)
      var ageDate = new Date(diff);
      var age = Math.abs(ageDate.getUTCFullYear()-1970)
      var ph= this.state.Code+" "+this.state.PhoneNo
      await this.props.registerUser({ name: this.state.FullName, password: this.state.Password, email:this.state.EmailId ,age : age ,country: this.state.Country ,PhoneNo: ph });
      // console.log(this.props.register)
      if( this.props.register.isRegistered){
        // alert('Registered Successfully')
        // this.props.onClick();
        modal.modalmsg = <Alert color='success'>Successfully Registered!</Alert>
        modal.show = true
      }
       else if(this.props.register.errMess){
        modal.modalmsg = <Alert color='Danger'>{this.props.register.errMess.message}</Alert>
        modal.show = true
      }
      this.setState({
        modal: modal
      })
    }
    else
    {
      modal.modalmsg = <Alert color='danger'>OTP Didn't Match, Try Again</Alert>
      modal.loadForm = true
      this.setState({
        modal:modal
      })
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    var modal = this.state.modal
    modal.open = true
    this.setState({
      modal: modal
    })
    await this.props.verifyMail({email: this.state.EmailId})
    // console.log(this.props.verifyMailStatus)
    const verifyStatus = this.props.verifyMailStatus
    console.log(verifyStatus)
    if(verifyStatus.isLoading)
    modal.show= false
    else
    {
      modal.show = true
      if(verifyStatus.errMess == null)
      modal.loadForm = true
      else
      {
        modal.loadForm = false
        const err=JSON.parse(verifyStatus.errMess.message)
        modal.modalmsg = <Alert color='danger'>{err.error}</Alert>
      }
    }
    this.setState({
      modal: modal
    })
    /* alert(`
    UserData:
    Name: ${this.state.FullName}
    EmailId: ${this.state.EmailId}
    PhoneNo: ${this.state.PhoneNo}
    `) */
    /* var td= new Date().getFullYear()
    var dob= new Date(this.state.DOB).getFullYear() */
    
    
  }
  resendOtp = async () =>{
    var modal = this.state.modal
    modal.show = false
    modal.modalmsg = ''
    this.setState({
      modal: modal,
      confirmToken: ''
    })
    await this.props.verifyMail({email: this.state.EmailId})
    // console.log(this.props.verifyMailStatus)
    const verifyStatus = this.props.verifyMailStatus
    console.log(verifyStatus)
    if(verifyStatus.isLoading)
    modal.show= false
    else
    {
      modal.show = true
      if(verifyStatus.errMess == null)
      modal.loadForm = true
      else
      {
        modal.loadForm = false
        const err=JSON.parse(verifyStatus.errMess.message)
        modal.modalmsg = <Alert color='danger'>{err.error}</Alert>
      }
    }
    this.setState({
      modal: modal
    })
  }
  dismissAlert = () =>{
    this.setState({
      showmsg:false
    })
  }
 
  handleBlur = (field) => (event) => {
    this.setState({
      touched: {...this.state.touched, [field]: true}
    });
  }

  validate = (
       FullName,
       EmailId,
       PhoneNo,
       Code,
       DOB ,
       Country,
       Password,
       ConfirmPassword,
  ) => {
    const errors = {
       FullName: '',
       EmailId: '',
       PhoneNo: '',
       Code,
       DOB: '' ,
       Country: '',
       Password: '',
       ConfirmPassword: '',
    }
    
    const reg_num = /^[1-9]{1}\s*[0-9]{9}/ ;
    const reg_dob = /^[0-9]{2}[-][0-9]{2}[-][0-9]{4}/ ;
    const reg_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (this.state.touched.FullName && FullName.length < 2)
       errors.FullName = 'Name should be greater than 2 characters';
    if (this.state.touched.EmailId && EmailId.split('').filter(x => x === '@').length !== 1)
       errors.EmailId = 'Name should be greater than 2 characters';
     if (this.state.touched.PhoneNo && !reg_num.test(PhoneNo) )
       errors.PhoneNo = 'Number not Valid'; 
    
    
    if (this.state.touched.Country && Country.length < 4)
      errors.Country = 'Enter Valid Country Name';
    if (this.state.touched.Password && !reg_password.test(Password) )
      errors.Password = 'Password must be a minimum of 8 characters including number, Upper, Lower And one special character.'
    if(this.state.touched.Password && this.state.touched.ConfirmPassword && Password !== ConfirmPassword)
      errors.ConfirmPassword = 'Password didn\'t matched! '
        

    
    return errors;
    }

  render() {
    //console.log(this.state.cValues)
    const CV=this.state.infoC.filter((ele) => !(ele.name.length>40))
    //console.log(CV)
    const codes=this.state.infoC.map(value => parseInt(value.dial_code.substr(1)))
    //console.log(codes)
    var CS=codes.sort()
    //console.log(codes.sort())
    const final_codes = CS.map(code => "+"+code.toString())
    
    //console.log(final_codes)
    const FC=[...new Set(final_codes)]
    //console.log(FC)
    const countries = CV.map((c) => {
      return (
      <option key={c.name} value={c.name}>{c.name}</option>
  )
}, this);
 const cc = FC.map((c) => {
  return (
  <option key={c} value={c}>{c}</option>
)
}, this); 
    const errors = this.validate(
       this.state.FullName,
       this.state.EmailId,
       this.state.PhoneNo,
       this.state.Code,
       this.state.DOB ,
       this.state.Country,
       this.state.Password,
       this.state.ConfirmPassword,
    );
    const shouldSubmit = errors.ConfirmPassword || errors.Country || errors.DOB || errors.EmailId || errors.FullName || errors.Password || errors.Password || errors.PhoneNo  ;
   const showPassword = this.state.showPassword;
  //  const view= !(this.props.register.isRegistered)?
  //             this.props.register.isLoading ?
  //             <div style={{textAlign:'center'}}><Spinner color='primary' /></div>:
  //             this.props.register.errMess ?
  //             <div style={{ textAlign:'center'}}>
  //             <Alert color='danger' isOpen={this.state.showmsg} toggle={this.dismissAlert}>
  //             <h5>{this.props.register.errMess.message}</h5>
  //             </Alert>
  //             </div>:
  //             null:null

    return (
      
        <Container className="SignUp border border-primary me border-3" style={{backgroundColor:'white',width:'500px',maxWidth:'100%',borderRadius:'20px',borderWidth:'200px'}}>
            <h2 style={{textAlign:'center'}}>Register</h2>
            <Form className="Sign-Up-Form" onSubmit={this.handleSubmit} >
            <Col>
                <FormGroup>
                  <Label >Name</Label>
                  <Input type="text" name="FullName" id="User-FullName"
                    value={this.state.FullName}
                    onChange={this.handleInputChange} valid={errors.FullName === ''} invalid={errors.FullName !==''} onBlur={this.handleBlur('FullName')}
                    placeholder="Full Name"
                    required
                  />
                  <FormFeedback>{errors.FullName}</FormFeedback>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label >Email</Label>
                  <Input 
                    type="email"
                    name="EmailId"
                    id="User-Email"
                    value={this.state.EmailId}
                    onChange={this.handleInputChange} valid={errors.EmailId === ''} invalid={errors.EmailId !==''} onBlur={this.handleBlur('EmailId')}
                    placeholder="youremail@email.com"
                    required
                  />
                  <FormFeedback>{errors.EmailId}</FormFeedback>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Phone Number</Label>
                  <div style={{display:'flex'}}>
                    <div className='col-3' style={{padding:0}}>
                  <Input
                    type="select"
                    name="Code"
                    id="Code"
                    value={this.state.Code}
                    onChange={this.handleInputChange}  onBlur={this.handleBlur('Code')}
                    placeholder="India"
                    required
                    
                  >
                    <option defaultValue hidden>
                      +
                    </option>
                    {cc}
                  </Input>
                  </div>
                  <Input
                    type="text"
                    name="PhoneNo"
                    id="User-Phone"
                    value={this.state.PhoneNo}
                    onChange={this.handleInputChange} valid={errors.PhoneNo === ''} invalid={errors.PhoneNo !==''} onBlur={this.handleBlur('PhoneNo')}
                    placeholder="9999999999"
                    maxLength="10"
                    // pattern="[+][0-9]{2}(| )[0-9]{10}"
                    required
                  />
                  </div>
                  {/* <FormFeedback>{errors.PhoneNo}</FormFeedback> */}
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>DOB</Label>
                  <Input
                    type="date"
                    name="DOB"
                    id="User-DOB"
                    value={this.state.DOB}
                    onChange={this.handleInputChange} valid={errors.DOB === ''} invalid={errors.DOB !==''}  onBlur={this.handleBlur('DOB')}
                    placeholder="DD/MM/YYYY"
                    required
                  />
                  <FormFeedback>{errors.DOB}</FormFeedback>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Country</Label>
                  <Input
                    type="select"
                    name="Country"
                    id="User-Country"
                    value={this.state.Country}
                    onChange={this.handleInputChange} valid={errors.Country=== ''} invalid={errors.Country !==''} onBlur={this.handleBlur('Country')}
                    placeholder="India"
                    required
                    
                  >
                    
                    <option width='250px' defaultValue hidden>
                      Select a country
                    </option>
                    {countries}
                    
                  </Input>
                  <FormFeedback>{errors.Country}</FormFeedback>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label >Password</Label>
                  <Row>
                   <Col xs="10" style={{paddingRight:'0px'}}>
                  <Input
                    type={showPassword ?'text':'password'}
                    name="Password"
                    id="Sign-Up-Password"
                    value={this.state.Password}
                    onChange={this.handleInputChange} valid={errors.Password === ''} invalid={errors.Password} onBlur={this.handleBlur('Password')}
                    placeholder="********"
                    required 
                  />
                  <FormFeedback>{errors.Password}</FormFeedback>
                  </Col>

                  <Col xs='1' style={{padding:0}}>
                  <Button type='button' color='success' outline onClick={()=>{this.setState({showPassword: !showPassword})}} >
                    {
                      showPassword?
                      <FontAwesomeIcon icon={faEyeSlash} />:
                      <FontAwesomeIcon icon={faEye} /> 
                    }
                  </Button>  
                  </Col>
                  </Row>
                  
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label >Confirm Password</Label>
                  
                  <Row>
                   <Col xs="10" style={{paddingRight:'0px'}}>
                  <Input
                    type={showPassword?'text':'password'}
                    name="ConfirmPassword"
                    id="Confirm-Password"
                    value={this.state.ConfirmPassword}
                    onChange={this.handleInputChange} valid={errors.ConfirmPassword === ''} invalid={errors.ConfirmPassword !==''} onBlur={this.handleBlur('ConfirmPassword')}
                    placeholder="********"
                    required
                  />
                  <FormFeedback>{errors.ConfirmPassword}</FormFeedback>
                  </Col>

                  <Col xs='1' style={{padding:0}}>
                  <Button type='button' color='success' outline onClick={()=>{this.setState({showPassword: !showPassword})}} >
                    {
                      showPassword?
                      <FontAwesomeIcon icon={faEyeSlash} />:
                      <FontAwesomeIcon icon={faEye} /> 
                    }
                  </Button>
                  </Col>
                  </Row>
                  
                </FormGroup>
              </Col>
              <Button disabled={shouldSubmit} type="submit" color="primary" >Submit</Button>
              <div style={{textAlign:'center'}}>Already Registered?&nbsp;&nbsp;&nbsp; <button className='regB' type='button' onClick={this.props.onClick}  style={{color:'blue',borderColor:'transparent',backgroundColor:'transparent'}}>Sign In </button></div>
              {/* <Col>{view}</Col> */}
            </Form>
              <Modal isOpen={this.state.modal.open} toggle={this.toogle} style={{textAlign:'center', fontFamily:'Roboto', fontSize:'160%'}} >
                <ModalHeader toggle={this.toogle} >
                  <div style={{display:'inline-flex'}}>
                    <div>
                  Confirm your Email</div>   
                  {
                    this.state.modal.show && this.state.modal.loadForm ?
                    <div className='my-auto' style={{marginLeft:'100px'}}>
                      <OtpTimer seconds= {15} minutes={3} resend={this.resendOtp} ButtonText='Resend Otp' background={'red'} />
                    </div> :
                    null
                  }
                </div>
                </ModalHeader>
                <ModalBody onSubmit={this.handletokenSubmit} >
                  {
                    this.state.modal.show ?
                    this.state.modal.loadForm ?
                    <Form>
                      <div style={{fontSize:'65%', textAlign:'left'}}>An OTP has been sent to you mail for confirmation<br/> Please enter your OTP here.</div>
                    <Label>Confirm OTP</Label>
                    <Input
                      type="text"
                      name="confirmToken"
                      id="Confirm-Email"
                      value={this.state.confirmToken}
                      onChange={(event) => this.setState({confirmToken : event.target.value})} 
                      // valid={errors.DOB === ''} invalid={errors.DOB !==''}  onBlur={this.handleBlur('DOB')}
                      placeholder="Enter OTP"
                      required
                    />
                    {/* <FormFeedback>{errors.DOB}</FormFeedback> */}
                    <div>{this.state.modal.modalmsg}</div>
                    <Button style={{margin:'2%'}} color='primary' type='submit'>Submit</Button>
                  </Form> :
                  <div>{this.state.modal.modalmsg}</div> :
                  <span style={{textAlign:'center', padding:'1%'}}><Spinner grow color='info' /></span>
                  }
                
                </ModalBody>
                <ModalFooter>
                  <Button color='info' onClick={this.toogle} >Cancel</Button>
                </ModalFooter>
              </Modal>
            
          </Container>
      
    )
  }
}

export default SignUp;


import { connect } from 'react-redux'
import { login } from '../actions'
import LoginForm from 'components/Body/LoginForm'

const mapActionCreater = {
  login
}

const mapStateToProp = (state) => ({

});

export default connect(mapStateToProp, mapActionCreater)(LoginForm)

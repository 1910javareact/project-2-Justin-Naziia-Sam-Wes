import { connect } from 'react-redux'
import { IState } from '../../reducers'
import { RegisterUserComponent } from './RegisterUserComponent'
import { registerUser } from '../../action-mappers/register-user-action-mapper'

const mapStateToProps = (state: IState) => {
    return {
        user: state.login.user,
    }
}

const mapDispatchToProps = {
    registerUser
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUserComponent)
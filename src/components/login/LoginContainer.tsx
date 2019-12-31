import { connect } from "react-redux"
import { Login } from "./login"
import { uLogin } from "../../action-mappers/login-action-mappers"
import { IState } from "../../reducers"

const mapStateToProps = (state: IState) => {
    return {
        user: state.login.user,
        success: state.login.success
    }
}

const mapDispatchToProps = {
    uLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
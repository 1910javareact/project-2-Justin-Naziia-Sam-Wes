import { IState } from "../../reducers";
import { userAction } from "../../action-mappers/user-info-action"
import { connect } from "react-redux";
import { UserComponent } from "./UserProfilePageComponent";


const mapStateToProps = (state: IState) => {
    return {
        user: state.login.user
    }
}

const mapDispatchtoProps = {
    userAction
}

export default connect(mapStateToProps, mapDispatchtoProps)(UserComponent)
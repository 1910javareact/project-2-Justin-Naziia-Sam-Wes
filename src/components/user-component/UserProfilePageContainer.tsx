import { IState } from "../../reducers";
import { userById } from "../../action-mappers/userbyid-mapper"
import { connect } from "react-redux";
import { UserComponent } from "./UserProfilePageComponent";


const mapStateToProps = (state: IState) => {
    return {
        user: state.userById.user
    }
}

const mapDispatchtoProps = {
    userById
}

export default connect(mapStateToProps, mapDispatchtoProps)(UserComponent)
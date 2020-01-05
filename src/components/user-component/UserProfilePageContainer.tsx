import { IState } from "../../reducers";
import { getAllSaved } from "../../action-mappers/user-profile-mapper"
import { connect } from "react-redux";
import { UserComponent } from "./UserProfilePageComponent";


const mapStateToProps = (state: IState) => {
    return {
        saved: state.profile.saved
    }
}

const mapDispatchtoProps = {
    getAllSaved
}

export default connect(mapStateToProps, mapDispatchtoProps)(UserComponent)
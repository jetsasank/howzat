import matchStore from "./stores/matchStore";
import {getCurrentMatches} from "./actions/matchAction";

window.store = matchStore;
window.getCurrentMatches = getCurrentMatches;
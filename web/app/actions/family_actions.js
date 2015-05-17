import Actions from "app/templates/actions";

import ActionConstants from "app/constants/action_constants";


class FamilyActions extends Actions {

  leave() {
    this.act({
      type: ActionConstants.families.leave,
    });
  }
}


module.exports = new FamilyActions();

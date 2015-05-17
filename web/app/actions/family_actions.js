import Actions from "app/templates/actions";

import ActionConstants from "app/constants/action_constants";


class FamilyActions extends Actions {

  leave(attributes) {
    this.act({
      type: ActionConstants.families.leave,
      attributes: attributes,
    });
  }
}


module.exports = new FamilyActions();

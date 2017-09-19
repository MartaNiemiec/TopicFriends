import { Component, OnInit, Input } from '@angular/core';
import {UserData, UserDescriptions, UserProfile} from 'app/user-profile/user-profile.service';
import {TopicInterest, UserInterests} from '../../user-profile/user-interests'
import {getDictionaryValuesAsArray} from 'app/shared/utils';
import {TagListModel} from '../../shared/TagListModel'
import {TagInclusions} from '../../shared/TagInclusions'

export class SupplyDemandTemplate{
  public static DESIRE_TYPE = {
    SUPPLY: 'supply',
    DEMAND: 'demand',
  };

  desireType: string;
  topics: string;
}

@Component({
  selector: 'nw-user-template',
  templateUrl: './user-template.component.html',
  styleUrls: ['./user-template.component.scss'],
})
export class UserTemplateComponent implements OnInit {

  @Input('userProfile') _userPublicProfile: UserData;
  userId
  // @Input('userProfile') _userPublicProfile: UserProfile = new UserProfile();

  _whatUserWants: SupplyDemandTemplate[] = [];
  userInterests: UserInterests;
  userDescriptions: UserDescriptions;
  profileBasicInfo: UserProfile;
  _expand: boolean;
  supplyDemand

  constructor() { }

  ngOnInit() {
    this.userId = this._userPublicProfile.userId
    this._whatUserWants = this._getWhatUserWants();
    this._userPublicProfile.descriptions.subscribe(it => {
      this.userDescriptions = it
    })
    this._userPublicProfile.interests.subscribe(it => {
      this.userInterests = it;
      // console.log('userPublicProfile.interests.subscribe', it)
      this.supplyDemand =
        this.userInterests &&
        this.userInterests.byInteractionMode &&
        this.userInterests.byInteractionMode.supplyDemand
    });
    this._userPublicProfile.profile.subscribe(it => {
      this.profileBasicInfo = it
    })
  }

  extractTags(dictionary: TagInclusions): TopicInterest[] {
    return getDictionaryValuesAsArray(dictionary);
  }

  private _getWhatUserWants(){
    let whatUserWants: SupplyDemandTemplate[] = [];
    if(this._userPublicProfile){
      // let auxObjectJSON = JSON.parse(JSON.stringify(this._userPublicProfile.whatUserWants));
      // let keys: string[] = Object.keys(this._userPublicProfile.whatUserWants);
      // keys.forEach((key: string)=>{
      //   if(auxObjectJSON[key]){
      //     if(auxObjectJSON[key].supply.topics) {
      //       let auxSupplyDemand: SupplyDemandTemplate = new SupplyDemandTemplate();
      //       auxSupplyDemand.desireType = SupplyDemandTemplate.DESIRE_TYPE.SUPPLY;
      //       auxSupplyDemand.topics = auxObjectJSON[key].supply.topics;
      //       whatUserWants.push(auxSupplyDemand);
      //     }
      //     if(auxObjectJSON[key].demand.topics) {
      //       let auxSupplyDemand: SupplyDemandTemplate = new SupplyDemandTemplate();
      //       auxSupplyDemand.desireType = SupplyDemandTemplate.DESIRE_TYPE.DEMAND;
      //       auxSupplyDemand.topics = auxObjectJSON[key].demand.topics;
      //       whatUserWants.push(auxSupplyDemand);
      //     }
      //   }
      // });
    }

    return whatUserWants;
  }

  tagListModel(tags: TagInclusions) {
    return new TagListModel(getDictionaryValuesAsArray(tags));
  }

}

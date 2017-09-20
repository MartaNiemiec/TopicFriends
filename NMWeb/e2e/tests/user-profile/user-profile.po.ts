import {$, browser, by, element, ElementFinder, protractor} from 'protractor'
import {promise} from 'selenium-webdriver'
import Promise = promise.Promise
import {TestWait} from '../../test-support/wait'

export class UserProfilePage {
  private wait: TestWait = new TestWait()

  userProfileSelector                      = 'app-user-profile'
  userProfile: ElementFinder               = $(this.userProfileSelector)
  userProfileBasicInfo: ElementFinder      = $('app-user-profile-basic-info')
  userProfileDescription: ElementFinder    = $('textarea[id="md-input-3"]')
  userProfileWhatYouExpect: ElementFinder  = $('textarea[formControlName="whatDoYouExpectFromTheApp"]')

  pleaseLogInButton: ElementFinder         = $(this.userProfileSelector + ' button')
  saveProfileButton: ElementFinder         = $('#saveProfile')

  linkedInLinkInput: ElementFinder         = $('i[class="icon ion-social-linkedin"]').
                                             element(by.xpath('ancestor::md-input-container/descendant::input'))

  //TOPICS
  markedTopicFromSelectList: ElementFinder = $('md-option.mat-active')
    // add supply/demand
  //ENDOF: TOPICS

  // GEOLOCATION
  whereILive  = $('textarea[formControlName="whereILive"]')
  whereIWork  = $('textarea[formControlName="whereIWork"]')
  whereIStudy = $('textarea[formControlName="whereIStudy"]')
    //pick (for each)
    //clear (for each)
  // ENDOF: GEOLOCATION

  navigateTo(): Promise<any> {
    return browser.get('profile')
  }

  saveProfileWithKeyboard() {
    this.userProfileDescription.click()
    this.userProfileBasicInfo.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'S'))
  }

  expectTopicTagSelected(tag?: ElementFinder) { // FIXME
    if(tag) {
      return true
    }
    return false
  }

  selectFirstSuggestedTag(element: ElementFinder): Promise<string> {
    let optionSelected
    this.wait.forElementPresent(element)
    element.sendKeys(protractor.Key.ARROW_DOWN)
    this.wait.forElementPresent(this.markedTopicFromSelectList)
    optionSelected = this.markedTopicFromSelectList.getText()
    element.sendKeys(protractor.Key.ENTER)

    return optionSelected
  }
}

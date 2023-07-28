import { Information, InformationList, InformationListItem, InformationTitle, RewardBox, RewardImg, RewardImgBox, RewardParagraph, SidebarContainer, User, UserAavatar, UserName, UserNumber } from "./style";
import userAvatar from "../../assets/avatar.png";
import rewardImg from "../../assets/reward.png";

function SideBarRight() {
  return (
    <SidebarContainer>
      <User>
        <UserAavatar src={userAvatar} alt="user avatar" />
        <UserName>Pak Kumis</UserName>
        <UserNumber>0123456789</UserNumber>
      </User>

      <Information>
        <InformationTitle>Information</InformationTitle>
        <InformationList>
          <InformationListItem>example@gmail.com</InformationListItem>
          <InformationListItem>Semester 5</InformationListItem>
          <InformationListItem>62 082 978 287</InformationListItem>
        </InformationList>
      </Information>

      <RewardBox>
        <RewardImgBox>
          <RewardImg src={rewardImg} alt="Rewards" />
          <RewardImg src={rewardImg} alt="Rewards" />
          <RewardImg src={rewardImg} alt="Rewards" />
        </RewardImgBox>
        <RewardParagraph>You don't have a medal</RewardParagraph>
      </RewardBox>
    </SidebarContainer>
  )
}

export default SideBarRight
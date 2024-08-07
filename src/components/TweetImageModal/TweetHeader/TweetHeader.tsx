import React, { memo, ReactElement } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import classnames from "classnames";

import { PROFILE } from "../../../constants/path-constants";
import LinkWrapper from "../../LinkWrapper/LinkWrapper";
import PopperUserWindow from "../../PopperUserWindow/PopperUserWindow";
import {
    selectTweetAuthorAvatar,
    selectTweetAuthorFullName,
    selectTweetAuthorId,
    selectTweetAuthorUsername
} from "../../../store/ducks/tweet/selectors";
import { useGlobalStyles } from "../../../util/globalClasses";
import { HoverItemDetail, useHoverItem } from "../../../hook/useHoverItem";
import { useTweetHeaderStyles } from "./TweetHeaderStyles";
import { fetchUserDetail } from "../../../store/ducks/userDetail/actionCreators";

const TweetHeader = memo((): ReactElement => {
    const globalClasses = useGlobalStyles({});
    const classes = useTweetHeaderStyles();
    const { visiblePopperWindow, handleHoverPopper, handleLeavePopper } = useHoverItem(fetchUserDetail);
    const tweetAuthorId = useSelector(selectTweetAuthorId);
    const avatar = useSelector(selectTweetAuthorAvatar);
    const tweetAuthorFullName = useSelector(selectTweetAuthorFullName);
    const tweetAuthorUsername = useSelector(selectTweetAuthorUsername);

    return (
        <div className={classes.header}>
            <Link to={`${PROFILE}/${tweetAuthorId}`}>
                <Avatar className={classnames(globalClasses.avatar, classes.avatar)} src={avatar} alt={avatar} />
            </Link>
            <LinkWrapper path={`${PROFILE}/${tweetAuthorId}`} visiblePopperWindow={visiblePopperWindow}>
                <div
                    id={"userInfo"}
                    onMouseEnter={() => handleHoverPopper({ userId: tweetAuthorId } as HoverItemDetail)}
                    onMouseLeave={handleLeavePopper}
                >
                    <Typography variant={"h6"} component={"div"} id={"link"}>
                        {tweetAuthorFullName}
                    </Typography>
                    <Typography variant={"subtitle1"} component={"div"}>
                        @{tweetAuthorUsername}
                    </Typography>
                    <PopperUserWindow visible={visiblePopperWindow} isTweetImageModal />
                </div>
            </LinkWrapper>
        </div>
    );
});

export default TweetHeader;

import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { ChatApi } from "../chatApi";
import {
    UI_V1_CHAT_CREATE_USER_ID,
    UI_V1_CHAT_USERS,
    UI_V1_CHAT_CHAT_ID
} from "../../../../constants/endpoint-constants";
import { testApiCall } from "../../../../util/test-utils/api-test-helper";
import { mockChats } from "../../../../util/test-utils/mock-test-data";

describe("ChatApi", () => {
    const mockAdapter = new MockAdapter(axios);
    const mockUserErrorResponse = "Participant not found";
    const mockUserBlockedErrorResponse = "Participant is blocked";

    beforeEach(() => mockAdapter.reset());

    describe("should fetch ChatApi.getChatById", () => {
        const mockURL = UI_V1_CHAT_CHAT_ID(1);

        it("[200] should get chat by id Success", () => {
            testApiCall(mockAdapter, "onGet", mockURL, 200, mockChats[0], ChatApi.getChatById, 1);
        });

        it("[404] should chat not found", () => {
            testApiCall(mockAdapter, "onGet", mockURL, 404, mockUserErrorResponse, ChatApi.getChatById, 1);
        });
    });

    describe("should fetch ChatApi.getUserChats", () => {
        it("[200] should get user chats Success", () => {
            testApiCall(mockAdapter, "onGet", UI_V1_CHAT_USERS, 200, mockChats, ChatApi.getUserChats);
        });
    });

    describe("should fetch ChatApi.createChat", () => {
        const mockURL = UI_V1_CHAT_CREATE_USER_ID(1);

        it("[200] should create chat Success", () => {
            testApiCall(mockAdapter, "onGet", mockURL, 200, mockChats[0], ChatApi.createChat, 1);
        });

        it("[404] should participant not found", () => {
            testApiCall(mockAdapter, "onGet", mockURL, 404, mockUserErrorResponse, ChatApi.createChat, 1);
        });

        it("[400] should participant is blocked", () => {
            testApiCall(mockAdapter, "onGet", mockURL, 400, mockUserBlockedErrorResponse, ChatApi.createChat, 1);
        });
    });
});

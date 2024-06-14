import React, { FC, ReactElement } from "react";
import { InputAdornment } from "@material-ui/core";

import ModalInputWrapper from "./ModalInputWrapper"; // Sử dụng default import

// import  {SearchIcon}  from "../../icons";
import SearchIcon from "@material-ui/icons/Search";


interface ModalInputProps {
    placeholder: string;
    searchText: string;
    onSearch: (text: string) => void;
}


const ModalInput: FC<ModalInputProps> = ({ placeholder, searchText, onSearch }): ReactElement => {

    return (
        <div>
            <ModalInputWrapper
                fullWidth
                placeholder={placeholder}
                variant="outlined"
                onChange={(event:any) => onSearch(event.target.value)}
                value={searchText}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    )
                }}
            />
        </div>
    );
};

export default ModalInput;

import React from 'react';
import styled from "styled-components";
import * as Select from '@radix-ui/react-select';
import {SelectItemProps} from "@radix-ui/react-select";
import {Icon} from "../icon/Icon";
import './style.css';

export const Translator: React.FC = () => {
    const [value, setValue] = React.useState<string>('france');

    return (
        <Select.Root>
            <Select.Trigger className="SelectTrigger" aria-label="Food">
                <Select.Value placeholder="RU"/>
                <Select.Icon className="SelectIcon">
                    <Icon iconId={'arrow-bottom'} width="10" height="7" viewBox="0 0 10 7"/>
                </Select.Icon>
            </Select.Trigger>
            <Select.Portal style={{zIndex: 999}}>
                <Select.Content  className="SelectContent">
                    <Select.Viewport  className="SelectViewport">
                        <Select.Group>
                            <SelectItem value="apple">RU</SelectItem>
                            <SelectItem value="banana">EN</SelectItem>
                        </Select.Group>
                    </Select.Viewport>

                </Select.Content>
            </Select.Portal>
        </Select.Root>
    );
};

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
    ({
         children,
         className,
         ...props
     }, forwardedRef) => {
        return (
            <Select.Item className={`SelectItem ${className}`} {...props} ref={forwardedRef}>
                <Select.ItemText>{children}</Select.ItemText>

            </Select.Item>
        );
    });

const StyledTranslator = styled.div`

  .SelectTrigger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 0 15px;
    font-size: 13px;
    line-height: 1;
    height: 35px;
    gap: 5px;
    background-color: white;
    color: var(--violet-11);
    box-shadow: 0 2px 10px green;
  }

  .SelectTrigger:hover {
    background-color: pink;
  }

  .SelectTrigger:focus {
    box-shadow: 0 0 0 2px black;
  }

  .SelectTrigger[data-placeholder] {
    color: red;
  }

  .SelectIcon {
    color: blue;
  }

  .SelectContent {
    overflow: hidden;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  }

  .SelectViewport {
    padding: 5px;
  }

  .SelectItem {
    font-size: 13px;
    line-height: 1;
    color: orange;
    border-radius: 3px;
    display: flex;
    align-items: center;
    height: 25px;
    padding: 0 35px 0 25px;
    position: relative;
    user-select: none;
  }

  .SelectItem[data-disabled] {
    color: darkcyan;
    pointer-events: none;
  }

  .SelectItem[data-highlighted] {
    outline: none;
    background-color: khaki;
    color: aqua;
  }

  .SelectLabel {
    padding: 0 25px;
    font-size: 12px;
    line-height: 25px;
    color: lightcoral;
  }

  .SelectSeparator {
    height: 1px;
    background-color: greenyellow;
    margin: 5px;
  }

  .SelectItemIndicator {
    position: absolute;
    left: 0;
    width: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .SelectScrollButton {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    background-color: white;
    color: brown;
    cursor: default;
  }

`

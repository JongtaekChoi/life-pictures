import { TextInput as BaseTextInput, ViewStyle } from "react-native";

import React from "react";
import styled from "@emotion/styled";

interface Props {
  value: string;
  onChange: (value: string) => void;
  style?: ViewStyle;
}

const TextInputContainer = styled(BaseTextInput)`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
`;

export function TextInput({ value, onChange, style }: Props) {
  return (
    <TextInputContainer value={value} onChangeText={onChange} style={style} />
  );
}

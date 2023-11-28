import styled, { css } from "styled-components";

import { Search } from "@styled-icons/bootstrap/Search";
import { UserCircle } from "@styled-icons/boxicons-regular/UserCircle";
import { Show } from "@styled-icons/boxicons-regular/Show";
import { Hide } from "@styled-icons/boxicons-regular/Hide";
import { Play } from "@styled-icons/ionicons-outline/Play";
import { Close } from "@styled-icons/ionicons-solid/Close";
export const Icon = styled.div``;
Icon.Search = styled(Search)`
  width: 18px;
  height: 18px;
`;
Icon.UserCircle = styled(UserCircle)`
  width: 22px;
  height: 22px;
`;
Icon.Show = styled(Show)`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;
Icon.Hide = styled(Hide)`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;
Icon.Play = styled(Play)`
  width: 22px;
  height: 22px;
`;
Icon.Close = styled(Close)`
`;

export const BannerBackground = styled.div`
  position: absolute;
  left: -2px;
  top: -2px;
  right: -2px;
  bottom: -2px;
`;

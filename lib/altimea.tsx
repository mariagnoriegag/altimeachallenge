import { NextPage } from "next";
import { FC, ReactElement } from "react";

export type AltimeaPage = NextPage & { Layout?: FC | ReactElement };

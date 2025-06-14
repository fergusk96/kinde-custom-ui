"use server";

import { useEffect } from "react";
import { Widget } from "../../../../components/widget";
import { DefaultLayout } from "../../../../layouts/default";
import { Root } from "../../../../root";
import { type KindePageEvent } from "@kinde/infrastructure";
import React from "react";
import { renderToString } from "react-dom/server.browser";

const DefaultPage: React.FC<KindePageEvent> = ({ context, request }) => {
  return (
    <Root context={context} request={request}>
      <DefaultLayout>
        <h1>My Header</h1>
        <p>{context.widget.content.description}</p>
      </DefaultLayout>
    </Root>
  );
};

// Page Component
export default async function Page(event: KindePageEvent): Promise<string> {
    const page = await DefaultPage(event);
    return renderToString(page);
}

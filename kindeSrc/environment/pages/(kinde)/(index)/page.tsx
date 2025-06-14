"use server";

import { IndexWidget } from "../../../../components/indexwidget";
import { DefaultLayout } from "../../../../layouts/default";
import { Root } from "../../../../root";
import { type KindePageEvent } from "@kinde/infrastructure";
import React from "react";
import { renderToString } from "react-dom/server.browser";

const REDIRECT_URL = "https://web.project-snake.win";


const DefaultPage: React.FC<KindePageEvent> = ({ context, request }) => {
  return (
    <Root context={context} request={request} redirectUrl={REDIRECT_URL}>
      <DefaultLayout>
        <IndexWidget
          heading="Welcome! Access the Main Website"
          description="To continue, please click the button below. You’ll be redirected to the main Project Snake website."
          button="Visit Main Site"
          link={REDIRECT_URL}
        />
      </DefaultLayout>
    </Root>
  );
};

// Page Component
export default async function Page(event: KindePageEvent): Promise<string> {
    const page = await DefaultPage(event);
    return renderToString(page);
}

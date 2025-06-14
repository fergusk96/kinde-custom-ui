"use server";

import { useEffect } from "react";
import { IndexWidget } from "../../../../components/indexwidget";
import { DefaultLayout } from "../../../../layouts/default";
import { Root } from "../../../../root";
import { type KindePageEvent } from "@kinde/infrastructure";
import React from "react";
import { renderToString } from "react-dom/server.browser";

const DefaultPage: React.FC<KindePageEvent> = ({ context, request }) => {
  return (
    <Root context={context} request={request}>
      <DefaultLayout>
        <IndexWidget
          heading="Welcome! Access the Main Website"
          description="To continue, please click the button below. You’ll be redirected to the main Project Snake website."
          button="Go to Main Website"
          link="https://web.project-snake.win"
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

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
        <Widget
          heading='Welcome to the Default Page'
          description='This is the default page of your Kinde application. You can customize it as needed.'
        />
      </DefaultLayout>
    </Root>
  );
};

// Page Component
export default async function Page(event: KindePageEvent): Promise<string> {
  useEffect(() => {
    window.location.replace("https://web.project-snake.com");
  }, []);
    const page = await DefaultPage(event);
    return renderToString(page);
}

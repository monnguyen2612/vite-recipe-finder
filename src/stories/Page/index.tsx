import React from "react";

import "./page.scss";
import { HeaderNavigation, Banner, Header, CustomLink } from "../index";
import { RFInputForm } from "../RFInputForm";
import { RFSocialLinks } from "../RFSocialLinks";

export const Page: React.FC = () => {
  return (
    <article>
      <Header
        topLeftContent={
          <CustomLink
            children="Une question ? Contactez-nous"
            href="google.com"
          />
        }
        topRightContent={
          <>
            <RFInputForm onSubmit={() => {}} />{" "}
            <RFSocialLinks listIcon={["youtube", "instagram", "facebook"]} />
          </>
        }
      />
      <HeaderNavigation />
      <Banner
        style={{
          backgroundImage: `url("https://www.cerealbio.fr/sites/default/files/2021-08/Groupe%2022695_0.png")`,
        }}
      >
        {`<h1>Nous acheter</h1>
        <p>
          Non, chez Céréal Bio, nos produits ne jouent pas à "cache-cache". Pour
          vous faciliter l'accès à vos produits veggies préférés, nous vous
          avons renseigné dans quelles enseignes les trouver 🔍
        </p>`}
      </Banner>
      <section className="storybook-page"></section>
    </article>
  );
};

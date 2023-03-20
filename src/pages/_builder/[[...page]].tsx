"use client";

import styled from "styled-components";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";
import { builder, BuilderComponent, useIsPreviewing } from "@builder.io/react";

import { PageHead } from "components/atoms";
import { $ContactForm, $WhatsApp } from "components/_register";

builder.init(process.env.BUILDER_PUBLIC_KEY || "");

$ContactForm();
$WhatsApp();

export async function getStaticPaths() {
  const pages = await builder.getAll("page", {
    fields: "data.url",
    options: { noTargeting: true },
  });

  return {
    paths: pages.map((page) => `/_builder${page.data?.url}`),
    fallback: true,
  };
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const { params } = ctx;

  const pages = params?.page as string[];

  const path = pages ? pages.join("/") : "";

  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + path,
      },
    })
    .toPromise();

  return {
    props: {
      page: page || null,
    },
    revalidate: 5,
  };
}

export default function Page({ page }: { page: BuilderComponent }) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }

  return (
    <>
      <PageHead title={page?.data.title || ""} />
      <Container>
        {/* PAGE CONFIG */}
        <BuilderComponent model="page" content={page} />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
`;

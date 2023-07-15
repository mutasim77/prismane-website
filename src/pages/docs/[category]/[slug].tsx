"use client";
import React from "react";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import {
  Copy,
  Check,
  Hash,
  Heart,
  Fire,
  User,
  GearSix,
  SignOut,
  WarningOctagon,
  ArrowSquareIn,
  X,
  Plus,
  EnvelopeSimple,
  WarningDiamond,
  Chat,
  Images,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import fs from "fs";
import remarkGfm from "remark-gfm";
import {
  Accordion,
  ActionButton,
  Alert,
  Animation,
  AspectRatio,
  AutocompleteField,
  Avatar,
  Backdrop,
  Badge,
  Box,
  Breadcrumb,
  Button,
  Card,
  Center,
  Checkbox,
  Chip,
  Circle,
  CloseButton,
  Collapse,
  ColorField,
  Container,
  Dialog,
  Divider,
  Drawer,
  Field,
  Flex,
  Form,
  Gradient,
  Grid,
  Hidden,
  Hide,
  Highlight,
  Icon,
  Image,
  Initials,
  Key,
  Link,
  List,
  Menu,
  Modal,
  NativeDateField,
  NativeSelectField,
  NumberField,
  Paper,
  PasswordField,
  PinField,
  Popover,
  Portal,
  Progress,
  Radio,
  SegmentedField,
  SelectField,
  Show,
  Skeleton,
  Spinner,
  Square,
  Stack,
  Switch,
  Table,
  Tabs,
  Text,
  TextareaField,
  TextField,
  Toaster,
  Tooltip,
  Transition,
  fr,
  usePrismaneTheme,
  usePrismaneColor,
  useToast,
} from "@prismane/core";
import {
  useAnimation,
  useCounter,
  useDebounce,
  useDimensions,
  useDraggable,
  useEmulatedFieldChange,
  useForm,
  useId,
  useIdle,
  useInterval,
  useKeyboardShortcut,
  useLocalization,
  useLocalStorage,
  useMediaQuery,
  useMemoization,
  useOutsideClick,
  usePrevious,
  useStyling,
  useToggle,
} from "@prismane/core/hooks";
import {
  min,
  max,
  required,
  match,
  url,
  email,
  username,
} from "@prismane/core/validators";
// Content
import content from "@/content";
// Containers
import { Docs as DocsPage } from "@/containers/docs/Docs";

// Docs Components
import ColorPalette from "@/components/ColorPalette";
import Important from "@/components/Important";
import Components from "@/components/Components";

export async function getStaticPaths() {
  const paths = content.flatMap((parent: any) =>
    parent.items.map((child: any) => ({
      params: {
        category: parent.slug,
        slug: child.slug,
      },
    }))
  );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { category, slug } = params;

  const data = fs.readFileSync(`src/content/${category}/${slug}.mdx`, "utf-8");

  const source = await serialize(data, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });

  return {
    props: {
      source,
      category,
      slug,
    },
  };
}

export default function Page(params: any) {
  const title = content
    .find((nav: any) => nav.slug === params.category)
    .items.find((item: any) => item.slug === params.slug).title;

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Prismane / {title.toString() || "Docs"} </title>
        <meta
          name="description"
          content={`Explore the customizable ${title} component of Prismane. Discover the power of Prismane's ${title} component today.`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DocsPage>
        {
          <MDXRemote
            {...params.source}
            components={{
              pre: ({ children, ...props }: any): any => {
                const language =
                  children.props.className?.replace("language-", "") || "jsx";

                const code = (children?.props.children?.trim() as string) || "";

                return (
                  <div className="flex flex-col gap-5 w-full">
                    <LiveProvider
                      disabled
                      code={code}
                      scope={{
                        Accordion,
                        ActionButton,
                        Alert,
                        Animation,
                        AspectRatio,
                        AutocompleteField,
                        Avatar,
                        Backdrop,
                        Badge,
                        Box,
                        Breadcrumb,
                        Button,
                        Card,
                        Center,
                        Checkbox,
                        Chip,
                        Circle,
                        CloseButton,
                        Collapse,
                        ColorField,
                        Container,
                        Dialog,
                        Divider,
                        Drawer,
                        Field,
                        Flex,
                        Form,
                        Gradient,
                        Grid,
                        Hidden,
                        Hide,
                        Highlight,
                        Icon,
                        Image,
                        Initials,
                        Key,
                        Link,
                        List,
                        Menu,
                        Modal,
                        NativeDateField,
                        NativeSelectField,
                        NumberField,
                        Paper,
                        PasswordField,
                        PinField,
                        Popover,
                        Portal,
                        Progress,
                        Radio,
                        SegmentedField,
                        SelectField,
                        Show,
                        Skeleton,
                        Spinner,
                        Square,
                        Stack,
                        Switch,
                        Table,
                        Tabs,
                        Text,
                        TextareaField,
                        TextField,
                        Toaster,
                        Tooltip,
                        Transition,
                        fr,
                        useAnimation,
                        useCounter,
                        useDebounce,
                        useDimensions,
                        useDraggable,
                        useEmulatedFieldChange,
                        useForm,
                        useId,
                        useIdle,
                        useInterval,
                        useKeyboardShortcut,
                        useLocalization,
                        useLocalStorage,
                        useMediaQuery,
                        useMemoization,
                        useOutsideClick,
                        usePrevious,
                        useStyling,
                        useToggle,
                        usePrismaneTheme,
                        usePrismaneColor,
                        useToast,
                        min,
                        max,
                        required,
                        match,
                        url,
                        email,
                        username,
                        Heart,
                        Fire,
                        User,
                        GearSix,
                        SignOut,
                        X,
                        Plus,
                        EnvelopeSimple,
                        WarningDiamond,
                        Chat,
                        Images,
                        MagnifyingGlass,
                        useState: React.useState,
                        useEffect: React.useEffect,
                        useRef: React.useRef,
                        React,
                      }}
                      language={language}
                      theme={{
                        plain: {
                          color: "#f472b6",
                        },
                        styles: [
                          {
                            types: ["prolog"],
                            style: {
                              color: "#ec4899",
                            },
                          },
                          {
                            types: ["comment"],
                            style: {
                              color: "#A0AEC0",
                              fontStyle: "italic",
                            },
                          },
                          {
                            types: ["builtin", "tag", "changed", "keyword"],
                            style: {
                              color: "#C678DD",
                            },
                          },
                          {
                            types: ["number", "inserted"],
                            style: {
                              color: "#f472b6",
                            },
                          },
                          {
                            types: ["constant"],
                            style: {
                              color: "#D19A66",
                            },
                          },
                          {
                            types: ["attr-name", "variable"],
                            style: {
                              color: "#86efac",
                            },
                          },
                          {
                            types: ["deleted", "string", "attr-value"],
                            style: {
                              color: "#7dd3fc",
                            },
                          },
                          {
                            types: ["selector"],
                            style: {
                              color: "#a5b4fc",
                            },
                          },
                          {
                            types: ["punctuation", "operator"],
                            style: {
                              color: "#ec4899",
                            },
                          },
                          {
                            types: ["function"],
                            style: {
                              color: "#fca5a5",
                            },
                          },
                          {
                            types: ["class-name"],
                            style: {
                              color: "#a5b4fc",
                            },
                          },
                          {
                            types: ["char"],
                            style: {
                              color: "#ec4899",
                            },
                          },
                        ],
                      }}
                    >
                      {language === "jsx" && (
                        <div className="flex p-5 border dark:border-[#0F0F0F] border-base-300 rounded-md text-white grow overflow-x-auto sm:overflow-x-visible">
                          <LivePreview className="flex w-full grow gap-5" />
                        </div>
                      )}
                      <div className="relative w-full">
                        <LiveEditor
                          style={{
                            fontFamily: "monospace",
                            fontSize: "1rem",
                          }}
                          className="overflow-x-auto w-full bg-base-900 rounded-md"
                        />
                        <ActionButton
                          variant="primary"
                          color="pink"
                          icon={<Copy />}
                          pos="absolute"
                          t={fr(1.5)}
                          r={fr(1.5)}
                          size="sm"
                          onClick={() => {
                            navigator.clipboard.writeText(
                              children?.props.children
                            );
                          }}
                        />
                      </div>
                    </LiveProvider>
                  </div>
                );
              },
              h1: ({ children, ...props }) => (
                <h1
                  className="text-base-900 dark:text-white text-3xl sm:text-4xl font-bold"
                  {...props}
                >
                  {children}
                </h1>
              ),
              h2: ({ children, ...props }: any) => {
                const id = children
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^a-z0-9-]/g, "");

                return (
                  <NextLink
                    href={`${router.asPath}#${id}`}
                    className="flex items-center gap-4 mt-10 group"
                    id={id}
                  >
                    <h2
                      className="text-base-800 dark:text-base-100 text-2xl sm:text-3xl font-bold no-underline group-hover:underline underline-offset-2 decoration-primary-500"
                      {...props}
                    >
                      {children}
                    </h2>
                    <Hash
                      size={32}
                      className="hidden group-hover:flex text-primary-500"
                    />
                  </NextLink>
                );
              },
              h3: ({ children, ...props }) => (
                <h3
                  className="text-base-800 dark:text-base-100 text-lg sm:text-xl font-bold mt-6"
                  {...props}
                >
                  {children}
                </h3>
              ),
              h4: ({ children, ...props }) => (
                <h4
                  className="text-base-800 dark:text-base-100 text-base sm:text-lg font-bold"
                  {...props}
                >
                  {children}
                </h4>
              ),
              p: ({ children, ...props }) => (
                <p
                  className="text-base-800 dark:text-base-100 leading-7 w-full"
                  {...props}
                >
                  {children}
                </p>
              ),
              code: ({ children, ...props }) => (
                <code
                  className="text-primary-500 bg-primary-500/10 dark:bg-primary-700/10 px-1 sm:px-2 py-0.5 rounded-md text-sm sm:text-base"
                  {...props}
                >
                  {children}
                </code>
              ),
              li: ({ children, ...props }) => (
                <li className="dark:text-white text-base-800" {...props}>
                  - {children}
                </li>
              ),
              hr: ({ children, ...props }) => (
                <hr
                  className="bg-base-700 dark:bg-base-400 border-none h-px"
                  {...props}
                >
                  {children}
                </hr>
              ),
              table: ({ children, ...props }) => (
                <div className="w-full overflow-x-auto">
                  <table
                    className="dark:text-white text-base-800 text-sm sm:text-base w-full"
                    {...props}
                  >
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children, ...props }) => (
                <thead
                  className="dark:!bg-base-700/10 !bg-base-500/20 text-sm sm:text-base"
                  {...props}
                >
                  {children}
                </thead>
              ),
              tr: ({ children, ...props }) => (
                <tr
                  className="w-full border-b dark:border-base-700 border-base-300"
                  {...props}
                >
                  {children}
                </tr>
              ),
              td: ({ children, ...props }) => (
                <td className="px-2 sm:px-6 md:px-8 py-2.5" {...props}>
                  {children}
                </td>
              ),
              th: ({ children, ...props }) => (
                <th
                  className="px-2 sm:px-6 md:px-8 py-2.5 text-left"
                  {...props}
                >
                  {children}
                </th>
              ),
              a: ({ children, ...props }) => (
                <NextLink
                  {...props}
                  className="inline-flex items-center text-primary-500 gap-1 underline"
                >
                  {children} <ArrowSquareIn />
                </NextLink>
              ),
              Versatile: ({ children, ...props }) => (
                <NextLink
                  href="/docs/getting-started/overview#versatile-components"
                  className="flex items-center gap-5"
                >
                  <h1 className="text-base-900 dark:text-white text-2xl sm:text-4xl font-bold">
                    {children}
                  </h1>
                  <Chip>Versatile Component</Chip>
                </NextLink>
              ),
              ColorPalette,
              Important,
              Components,
              Chip,
              Tabs,
            }}
          />
        }
      </DocsPage>
    </>
  );
}

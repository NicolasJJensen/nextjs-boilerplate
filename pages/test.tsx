import ThemeEditor from '@/components/ThemesModal'
import useThemes from '@/hooks/useThemes'
import { SingleThemeType } from '@/types/ThemeTypes'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Fragment, useReducer, useState } from 'react'

const Test: NextPage = () => {
  const { themes, customThemes, currentTheme, addTheme, setTheme, editTheme, removeTheme, setMode } = useThemes()

  function updateThemePart(themeName: string, themePart: SingleThemeType) {
    editTheme(themeName, { light: themePart, dark: themePart })
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Test Page</h1>
        <p>{currentTheme}</p>
        <br />
        <Link href='/' >Go To HomePage</Link>
      </main>
    </>
  )
}

export default Test

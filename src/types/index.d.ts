declare module 'tailwindcss/lib/util/flattenColorPalette' {
  type ColorPalette = { [key: string]: string | ColorPalette };

  function flattenColorPalette(colors: ColorPalette): ColorPalette;

  export default flattenColorPalette;
}

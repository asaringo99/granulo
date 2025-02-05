type Color = 
	'red' |
	'orange' |
	'amber' |
	'yellow' |
	'lime' |
	'green' |
	'emerald' |
	'teal' |
	'cyan' |
	'sky' |
	'blue' |
	'indigo' |
	'violet' |
	'purple' |
	'fuchsia' |
	'pink' |
	'rose' |
	'slate' |
	'gray' |
	'zinc' |
	'neutral' |
	'stone';

type Place = 'x' | 'y' | 'l' | 'r' | 't' | 'b';
type Size = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
type Strong = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';


type Join<S, T> = `${S}-${T}`;

type ColorKind = Join<Color, Strong>

declare type RelativeSize = '1/12' | '2/12' | '3/12' | '4/12' | '5/12' | '6/12' | '7/12' | '8/12' | '9/12' | '10/12' | '11/12' | 'full';
declare type BorderColor = Join<'border', ColorKind>
declare type BackgroundColor = Join<'bg', ColorKind>
declare type Text = Join<'text', Size>
declare type Width = Join<'w', RelativeSize>
declare type Height = Join<'h',RelativeSize>
declare type Basis = Join<'basis',RelativeSize>
declare type Arrange = 'center' | 'around' | 'between' | 'evenly' | 'stretch' | 'start' | 'end';
declare type Border = 'border' | Join<'border', Place>
declare type Rounded = Join<'rounded', 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'>
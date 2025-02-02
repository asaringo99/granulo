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

type Strong = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';

type Join<S, T> = `${S}-${T}`;

type ColorKind = Join<Color, Strong>

declare type BorderColor = Join<'border', ColorKind>
declare type BackgroundColor = Join<'bg', ColorKind>
declare type Size = '1/12' | '2/12' | '3/12' | '4/12' | '5/12' | '6/12' | '7/12' | '8/12' | '9/12' | '10/12' | '11/12' | 'full';
declare type Arrange = 'center' | 'around' | 'between' | 'evenly' | 'stretch' | 'start' | 'end';
declare type Border = 'border' | 'border-x' | 'border-y' | 'border-l' | 'border-r' | 'border-t' | 'border-b';
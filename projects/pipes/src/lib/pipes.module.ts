import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnyPipe } from './array/any';
import { EmptyPipe } from './array/empty';
import { FirstAndOthersPipe } from './array/first_and_others';
import { HighlightArrayElementPipe } from './array/highlight_array_element';
import { InArrayPipe } from './array/in_array';
import { IntersectPipe } from './array/intersect';
import { JoinWithPipe } from './array/join_with';
import { OrderByPipe } from './array/order_by';
import { PluckPipe } from './array/pluck';
import { SimpleSearchPipe } from './array/simple_search';
import { ToSentencePipe } from './array/to_sentence';
import { SlicePipe } from './array/slice';
import { UnexpiredPipe } from './array/unexpired';
import { WrapArrayElementsPipe } from './array/wrap_array_elements';

import { AppendSignPipe } from './number/append_sign';
import { BigNumberPipe } from './number/big_number';
import { BigNumberShortenedPipe } from './number/big_number_shortened';
import { NumberOrNilPipe } from './number/number_or_nil';
import { PercentagePipe } from './number/percentage';
import { PercentageOrNilPipe } from './number/percentage_or_nil';
import { PositiveOrNegativePipe } from './number/positive_or_negative';
import { ToIntPipe } from './number/to_int';

import { CapitalizePipe } from './string/capitalize';
import { CapitalizeFirstLetterPipe } from './string/capitalize_first_letter';
import { EllipsisWordPipe } from './string/ellipsis_word';
import { HighlightPipe } from './string/highlight';
import { NbspToSpacePipe } from './string/nbsp_to_space';
import { NoSpacePipe } from './string/no_space';
import { RemoveHtmlTagsPipe } from './string/remove_html_tags';
import { Replace } from './string/replace';
import { ToHTML } from './string/to_html';
import { ToParagraphsPipe } from './string/to_paragraphs';
import { TrimPipe } from './string/trim';
import { TruncatePipe } from './string/truncate';
import { TrustPipe } from './string/trust';
import { YesNoPipe } from './string/yes_no';

import { ExtractPropertyPipe } from './misc/extract_property';
import { RelativeColorsForHeatMapPipe } from './misc/relative_colors_for_heat_map';
import { ScaleForHeatMapPipe } from './misc/scale_for_heat_map';
import { ValuableValuesPipe } from './misc/valuable_values';

const PIPES = [
  // Array pipes
  AnyPipe,
  EmptyPipe,
  FirstAndOthersPipe,
  HighlightArrayElementPipe,
  InArrayPipe,
  IntersectPipe,
  JoinWithPipe,
  OrderByPipe,
  PluckPipe,
  SimpleSearchPipe,
  ToSentencePipe,
  SlicePipe,
  UnexpiredPipe,
  WrapArrayElementsPipe,

  // Number pipes
  AppendSignPipe,
  BigNumberPipe,
  BigNumberShortenedPipe,
  NumberOrNilPipe,
  PercentagePipe,
  PercentageOrNilPipe,
  PositiveOrNegativePipe,
  ToIntPipe,

  // String pipes
  CapitalizePipe,
  CapitalizeFirstLetterPipe,
  EllipsisWordPipe,
  HighlightPipe,
  NbspToSpacePipe,
  NoSpacePipe,
  RemoveHtmlTagsPipe,
  Replace,
  ToHTML,
  ToParagraphsPipe,
  TrimPipe,
  TruncatePipe,
  TrustPipe,
  YesNoPipe,

  // Misc pipes
  ExtractPropertyPipe,
  RelativeColorsForHeatMapPipe,
  ScaleForHeatMapPipe,
  ValuableValuesPipe
];

@NgModule({
  declarations: [PIPES],
  exports: [CommonModule, ...PIPES]
})
export class PipesModule {}

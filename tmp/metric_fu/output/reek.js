              var g = new Bluff.Line('graph', "1000x600");
      g.theme_37signals();
      g.tooltips = true;
      g.title_font_size = "24px"
      g.legend_font_size = "12px"
      g.marker_font_size = "10px"

        g.title = 'Reek: code smells';
        g.data('IrresponsibleModule', [8]);
g.data('UnusedParameters', [1]);
g.data('DuplicateMethodCall', [7]);
g.data('NestedIterators', [6]);
g.data('TooManyStatements', [2]);
g.data('RepeatedConditional', [1]);
        g.labels = {"0":"11/20"};
        g.draw();

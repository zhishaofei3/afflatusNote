import './index.css'
import $ from 'jquery'

$(function() {

  let $afflatusDialog = $('#afflatus-dialog')
  let $win = $(window)

  function createTweetLink(text, e) {
    let $target = $(e.target)
    text = text.trim()
    if (!text) {
      if (!$target.closest('#afflatus-dialog').length) {
        $afflatusDialog.hide()
      }
      return
    }

    let left = e.pageX + $afflatusDialog.width() > $win.width() ? e.pageX - $afflatusDialog.width() : e.pageX - 5,
      top = e.pageY + $afflatusDialog.height() > $win.height() ? e.pageY - $afflatusDialog.height() : e.pageY + 20
    $afflatusDialog.css({left, top}).show()

  }

  function getSelectedText() {
    if (window.getSelection) {
      return window.getSelection().toString()
    } else if (document.getSelection) {
      return document.getSelection()
    } else if (document.selection) {
      return document.selection.createRange().text
    }
  }

  function addEvents() {
    $(document).on('click', function(e) {
      createTweetLink(getSelectedText(), e)
    })

    $afflatusDialog.find('.close-btn').click(function (e) {
      $afflatusDialog.hide()
      return false
    })
  }

  // addEvents()





})
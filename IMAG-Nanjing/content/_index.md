---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: hero
    content:
      title: |
        南京理工大学 \
        智能媒体分析实验室
      image:
        filename: welcome.jpg
      text: |
        <br>

        The **智能媒体分析实验室 Research Group** has been a center of excellence for Artificial Intelligence research, teaching, and practice since its founding in 2016.

  - block: people
    content:
      title:
      # Choose which groups/teams of users to display.
      #   Edit `user_groups` in each user's profile to add them to one or more of these groups.
      user_groups:
          - Home
      sort_by: Params.index
      sort_ascending: true
    design:
      show_interests: false
      show_role: true
      show_social: false

  - block: custom_collection
    content:
      title_left: 新闻
      title_right: 论文
      count_left: 5
      count_right: 5
      filters_left:
        folders:
          - post
      filters_right:
        folders:
          - publication
      more_text_left: 更多
      more_text_right: 更多
    design:
      view: card
      columns: '1'

---

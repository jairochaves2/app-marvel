import {
  DescriptionTwoTone,
  ImportantDevicesTwoTone,
  MenuBookTwoTone,
  PersonTwoTone,
} from "@mui/icons-material";
import {
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import React from "react";
import { useComicDetail } from "../../../../hooks/contexts.hooks";

export default function ComicData() {
  const { comicsDetail } = useComicDetail();
  return (
    <article style={{ width: "100%", height: "100%", paddingLeft: 8 }}>
      <section>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <ListSubheader sx={{ fontSize: "1.2em" }}>
              {comicsDetail?.title}
            </ListSubheader>
          </Grid>
          {comicsDetail?.description && (
            <Grid item xs={12}>
              <ListItemButton title="Descrição" divider selected>
                <ListItemIcon>
                  <DescriptionTwoTone color="action" />
                </ListItemIcon>
                <ListItemText>{comicsDetail?.description}</ListItemText>
              </ListItemButton>
            </Grid>
          )}
          {comicsDetail?.format && (
            <Grid item xs={12} md={4}>
              <ListItemButton title="Formato" divider>
                <ListItemIcon>
                  <ImportantDevicesTwoTone color="action" />
                </ListItemIcon>
                <ListItemText>{comicsDetail?.format}</ListItemText>
              </ListItemButton>
            </Grid>
          )}
          {!!comicsDetail?.pageCount && (
            <Grid item xs={12} md={2}>
              <ListItemButton title="Quantidade de Páginas" divider>
                <ListItemIcon>
                  <MenuBookTwoTone color="action" />
                </ListItemIcon>
                <ListItemText>{comicsDetail?.pageCount}</ListItemText>
              </ListItemButton>
            </Grid>
          )}

          {!!comicsDetail?.creators?.items?.length &&
            comicsDetail?.creators?.items.map((item) => (
              <Grid item xs={12} md={4}>
                <ListItemButton title="Criadores" divider>
                  <ListItemIcon>
                    <PersonTwoTone color="action" />
                  </ListItemIcon>
                  <ListItemText>{item.name}</ListItemText>
                </ListItemButton>
              </Grid>
            ))}
        </Grid>
      </section>
    </article>
  );
}

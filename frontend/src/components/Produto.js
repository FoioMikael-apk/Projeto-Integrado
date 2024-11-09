import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const Produto = ({ produto, onDelete, onUpdate }) => (
  <Card variant="outlined" style={{ marginBottom: '1em' }}>
    <CardContent>
      <Typography variant="h6" component="div">
        {produto.nome}
      </Typography>
      <Typography color="textSecondary">
        Descrição: {produto.descricao}
      </Typography>
      <Typography color="textSecondary">
        Quantidade: {produto.quantidade}
      </Typography>
      <Typography color="textSecondary">
        Preço: R${produto.preco}
      </Typography>
      <Typography color="textSecondary">
        Rua: {produto.rua}
      </Typography>
      <Box display="flex" justifyContent="space-between" marginTop="1em">
        <Button variant="contained" color="secondary" onClick={() => onDelete(produto.id)}>
          Deletar
        </Button>
        <Button variant="outlined" color="primary" onClick={() => onUpdate(produto)}>
          Atualizar
        </Button>
      </Box>
    </CardContent>
  </Card>
);

export default Produto;
